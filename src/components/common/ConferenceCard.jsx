import React, { memo } from 'react';

/**
 * ConferenceCard - Single previous-conference card.
 * @param {string} title  - Conference name
 * @param {string} year   - Year string e.g. "2025"
 * @param {string|null} link - External URL or null
 * @param {string} image  - Image src
 */
const ConferenceCard = memo(({ title, year, link, image }) => {
  const content = (
    <div className="bg-[#293985] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
      <div className="overflow-hidden relative h-48 sm:h-52 w-full">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <h3 className="text-base sm:text-lg text-white font-bold title-font mb-2 text-center transition-colors duration-300">
          {title}
        </h3>
        <p className="text-center font-extrabold text-[#ff0000] text-xl mt-auto">
          {year}
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-full">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
});

ConferenceCard.displayName = 'ConferenceCard';

export default ConferenceCard;

