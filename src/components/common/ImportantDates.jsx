import React, { memo } from 'react';
import { importantDates } from '../../data/data';

/**
 * ImportantDates - Reusable component showing key conference deadlines.
 * Consumes dates dynamically from data.jsx.
 */
const ImportantDates = memo(() => {
  return (
    <div className="w-full py-4">
      <h2 className="text-center text-white text-2xl sm:text-3xl font-extrabold uppercase tracking-wider mb-8 font-heading">
        Important Dates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {importantDates.map((item, index) => (
          <div className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center h-full group hover:-translate-y-1" key={item.id}>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
              <i className={`fa-solid ${item.icon} text-xl`}></i>
            </div>
            <span className="text-[0.7rem] uppercase tracking-widest text-[#57b7e7] font-black block mb-2">
              {item.label}
            </span>
            <span className="text-base sm:text-lg font-black text-white leading-tight mt-auto">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

ImportantDates.displayName = 'ImportantDates';

export default ImportantDates;
