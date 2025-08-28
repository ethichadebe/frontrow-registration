import React, { useEffect, useRef, useState } from "react";
import scheduler from "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
import "../styles/CalendarPage.css";

const EVENT_TYPES = ["All", "Psychosocial", "Medical", "Dental", "Visual"];

const CalendarPage = () => {
  const schedulerContainer = useRef(null);
  const miniCalendarContainer = useRef(null);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    scheduler.plugins({
      minical: true,
      tooltip: true,
    });

    scheduler.clearAll();
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.config.first_hour = 7;
    scheduler.config.last_hour = 20;
    scheduler.config.time_step = 30;
    scheduler.config.limit_time_select = true;
    scheduler.config.details_on_dblclick = true;
    scheduler.config.details_on_create = true;
    scheduler.config.start_on_monday = true;
    scheduler.xy.nav_height = 56;

    scheduler.locale.labels.section_subject = "Title";
    scheduler.locale.labels.section_location = "Location";
    scheduler.locale.labels.section_type = "Type";
    scheduler.locale.labels.section_text = "Description";
    scheduler.locale.labels.day_tab = "Day";
    scheduler.locale.labels.week_tab = "Week";
    scheduler.locale.labels.month_tab = "Month";
    scheduler.templates.day_date = (date) =>
      `Schedule • ${scheduler.date.date_to_str("%l, %d %F %Y")(date)} <span class="tz-hint">Africa/Johannesburg</span>`;

    // Lightbox with Type dropdown
    scheduler.config.lightbox.sections = [
      { name: "subject", height: 30, map_to: "text", type: "textarea", focus: true },
      { name: "location", height: 30, map_to: "location", type: "textarea" },
      {
        name: "type",
        height: 30,
        type: "select",
        map_to: "type",
        options: [
          { key: "Psychosocial", label: "Psychosocial" },
          { key: "Medical", label: "Medical" },
          { key: "Dental", label: "Dental" },
          { key: "Visual", label: "Visual" },
        ],
      },
      { name: "text", height: 100, map_to: "details", type: "textarea" },
      { name: "time", height: 72, type: "time", map_to: "auto" },
    ];

    scheduler.templates.event_class = (_s, _e, ev) => {
      const t = (ev.type || "Psychosocial").toLowerCase();
      return `type-${t}`;
    };

    scheduler.templates.tooltip_text = (start, end, ev) => {
      const fmt = scheduler.date.date_to_str("%H:%i");
      return `
        <div class="tooltip">
          <div class="tt-title">${ev.text || "(No title)"} </div>
          <div>${fmt(start)}–${fmt(end)}</div>
          ${ev.location ? `<div>📍 ${ev.location}</div>` : ""}
          ${ev.type ? `<div>🏷️ ${ev.type}</div>` : ""}
          ${ev.details ? `<div class="tt-details">${ev.details}</div>` : ""}
        </div>
      `;
    };

    // Filtering for day/week/month views
    const filterNow = () => {
      const fn = (_id, ev) => (activeType === "All" ? true : (ev.type || "Psychosocial") === activeType);
      scheduler.filter_day = fn;
      scheduler.filter_week = fn;
      scheduler.filter_month = fn;
    };
    filterNow();

    scheduler.init(schedulerContainer.current, new Date(), "week");

    scheduler.attachEvent("onTemplatesReady", () => {
      scheduler.renderCalendar({
        container: miniCalendarContainer.current,
        navigation: true,
        handler: (date) => scheduler.setCurrentView(date),
      });
    });

    // Sample data
    const ymdhm = scheduler.date.date_to_str("%Y-%m-%d %H:%i");
    const today = new Date();
    const at = (h, m = 0) => new Date(today.getFullYear(), today.getMonth(), today.getDate(), h, m, 0, 0);

    scheduler.parse(
      [
        {
          id: 1,
          start_date: ymdhm(at(9, 0)),
          end_date: ymdhm(at(10, 0)),
          text: "Counselling Intro",
          location: "Room A",
          type: "Psychosocial",
          details: "Overview of support channels.",
        },
        {
          id: 2,
          start_date: ymdhm(at(11, 0)),
          end_date: ymdhm(at(11, 30)),
          text: "Flu Shot Drive",
          location: "Clinic",
          type: "Medical",
          details: "Walk-in vaccination window.",
        },
        {
          id: 3,
          start_date: ymdhm(at(13, 0)),
          end_date: ymdhm(at(14, 0)),
          text: "Dental Check Tips",
          location: "Room B",
          type: "Dental",
          details: "Pre-visit hygiene & Q&A.",
        },
        {
          id: 4,
          start_date: ymdhm(at(16, 30)),
          end_date: ymdhm(at(17, 30)),
          text: "Eye Health 101",
          location: "Auditorium",
          type: "Visual",
          details: "Screen-time habits & vision care.",
        },
      ],
      "json"
    );

    return () => scheduler.clearAll();
  }, []); // mount once

  // Re-apply filter when activeType changes
  useEffect(() => {
    const fn = (_id, ev) => (activeType === "All" ? true : (ev.type || "Psychosocial") === activeType);
    scheduler.filter_day = fn;
    scheduler.filter_week = fn;
    scheduler.filter_month = fn;
    scheduler.updateView();
  }, [activeType]);

  // Handlers
  const makeNewEvent = () => {
    const start = new Date();
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const id = scheduler.uid();
    scheduler.addEvent({
      id,
      start_date: start,
      end_date: end,
      text: "",
      type: activeType === "All" ? "Psychosocial" : activeType, // default to current filter
    });
    scheduler.showLightbox(id);
  };

  const exportICS = () => {
    if (scheduler.exportToICal) scheduler.exportToICal();
    else if (scheduler.exportToICS) scheduler.exportToICS();
    else alert("ICS export helper is not available in this build.");
  };

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h1>Health Awareness Calendar</h1>

        {/* NEW: toolbar row with actions + type filter side-by-side */}
        <div className="calendar-toolbar">
          <div className="calendar-actions toolbar-box">
            <button className="primary" onClick={makeNewEvent}>+ New Event</button>
            <button className="flat" onClick={() => scheduler.setCurrentView(new Date(), "day")}>Day</button>
            <button className="flat" onClick={() => scheduler.setCurrentView(new Date(), "week")}>Week</button>
            <button className="flat" onClick={() => scheduler.setCurrentView(new Date(), "month")}>Month</button>
            <button className="outline" onClick={exportICS} title="Export to ICS">Export (.ics)</button>
          </div>

          <div className="type-filter card toolbar-box">
            <div className="filter-label">Filter by Type</div>
            <div className="chip-row">
              {EVENT_TYPES.map((t) => (
                <button
                  key={t}
                  className={`chip ${activeType === t ? "chip-active" : ""}`}
                  onClick={() => setActiveType(t)}
                  aria-pressed={activeType === t}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="legend compact">
              <span><i className="dot psychosocial" /> Psychosocial</span>
              <span><i className="dot medical" /> Medical</span>
              <span><i className="dot dental" /> Dental</span>
              <span><i className="dot visual" /> Visual</span>
            </div>
          </div>
        </div>
      </div>

      <div className="calendar-layout">
        <aside className="mini-calendar card">
          <h2>Mini Calendar</h2>
          <div ref={miniCalendarContainer} className="mini-calendar-body" />
        </aside>

        <section className="scheduler-wrap card">
          <div ref={schedulerContainer} className="scheduler-container" />
        </section>
      </div>
    </div>
  );
};

export default CalendarPage;
