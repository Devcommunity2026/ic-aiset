// ============================================================
// src/data/data.js
// Single Source of Truth — all conference content lives here.
// Update any value here and it automatically updates site-wide.
// NOTE: Kept as .js (pure data/config, no JSX rendered here)
// ============================================================

import { committeePhotos } from '../constants/assets';

// ──────────────────────────────────────────────
// Conference Info
// ──────────────────────────────────────────────
export const conferenceInfo = {
  shortName: 'IC-AISET-2027',
  edition: 'Flagship Edition',
  fullName: 'International Conference on Convergence of AI, Start-Up, Disruptive Technologies and Sustainability for Resilient and Future-Ready Organizations',
  abbreviation: 'IC-AISET-2027',
  dates: 'January 05-06, 2027',
  year: '2027',
  mode: 'Hybrid (In-Person + Virtual)',
  organizer: 'Faculty of Management Studies',
  university: 'Medicaps University, Indore, M.P., India',
  address: 'A.B. Road, Pigdamber, Rau, Indore - 453331, M.P., India',
  phones: ['+91-731-3111500', '+91-731-3111501'],
  email: 'icaiset@medicaps.ac.in',
  proceedings: 'Full peer-reviewed proceedings with ISBN (Q1 2027)',
  bookVolume: "Springer / Taylor & Francis: 'AI, Disruptive Technologies & Future Organizations' (Q2 2027)",
  journals: 'Special issues in ABDC / Scopus / WoS indexed journals',
};

// ──────────────────────────────────────────────
// Hero / Navbar Content
// ──────────────────────────────────────────────
export const heroContent = {
  heading: 'International Conference on Convergence of AI, Start-Up, Disruptive Technologies and Sustainability for Resilient and Future-Ready Organizations',
  shortName: 'IC-AISET-2027',
  dates: 'January 05-06, 2027',
  mode: 'Hybrid (In-Person + Virtual)',
  organizer: 'Faculty of Management Studies, Medicaps University, Indore, M.P, India',
  tagline: 'Advancing Evidence-Based, Interdisciplinary Knowledge for a Sustainable Global Economy',
};

// ──────────────────────────────────────────────
// Navigation Links  (consumed by Nav.jsx)
// ──────────────────────────────────────────────
export const navLinks = [
  { name: 'ABOUT CONFERENCE', link: '/' },
  { name: 'ABOUT UNIVERSITY', link: '/aboutMedicaps' },
  { name: 'COMMITTEES', link: '/programeComitte' },
  { name: 'PAPER GUIDELINES', link: '/acceptedPapers' },
  { name: 'VENUE', link: '/venue' },
  { name: 'CONTACT US', link: '/contactUs' },
  { name: 'TOPICS', link: '/topics' },
];

// ──────────────────────────────────────────────
// Important Dates (from DOCX Section 12)
// ──────────────────────────────────────────────
export const importantDates = [
  { id: 'abstract', label: 'Call for Abstract', date: 'October 30, 2026', icon: 'fa-bullhorn' },
  { id: 'earlyBird', label: 'Early-Bird Registration', date: 'November 15, 2026', icon: 'fa-hourglass-half' },
  { id: 'regularReg', label: 'Regular Registration Deadline', date: 'December 10, 2026', icon: 'fa-id-card' },
  { id: 'confDay1', label: 'Main Conference (Day 1)', date: 'January 05, 2027', icon: 'fa-chalkboard-user' },
  { id: 'confDay2', label: 'Main Conference (Day 2)', date: 'January 06, 2027', icon: 'fa-award' },
];

// ──────────────────────────────────────────────
// Contact Info
// ──────────────────────────────────────────────
export const contactInfo = {
  email: 'icaiset@medicaps.ac.in',
  contacts: [
    { purpose: 'For Paper & Abstract Submission', name: 'Conference Organizing Secretariat', phone: '+91-731-3111500' },
    { purpose: 'For Doctoral Colloquium & Registration', name: 'Faculty of Management Studies', phone: '+91-731-3111501' },
    { purpose: 'For Hospitality & Event Coordination', name: 'Organizing Committee Desk', phone: '+91 9669385567' },
  ],
};

// ──────────────────────────────────────────────
// Social Links  (Footer + data-driven)
// ──────────────────────────────────────────────
export const socialLinks = {
  facebook: 'https://www.facebook.com/share/18WMTa4GR9/?mibextid=qi2Omg',
  twitter: 'https://x.com/Medicaps_Indore?t=8hTuBIHRt4zLhSSrqYhvXw&s=08',
  instagram: 'https://www.instagram.com/medicaps_university/',
  linkedin: 'https://www.linkedin.com/school/medicaps-university-indore/',
};

// ──────────────────────────────────────────────
// Footer Content
// ──────────────────────────────────────────────
export const footerContent = {
  copyright: 'IC-AISET-2027 | © 2027 Faculty of Management Studies, Medicaps University',
  socialLinks,
};

// ──────────────────────────────────────────────
// Venue Info
// ──────────────────────────────────────────────
export const venueInfo = {
  name: 'Faculty of Management Studies, Medicaps University',
  address: 'A.B. Road, Pigdamber, Rau, Indore-453331, M.P., India',
  phones: ['+91-731-3111500', '+91-731-3111501'],
  email: 'icaiset@medicaps.ac.in',
  mapSrc: 'https://maps.google.com/maps?width=2048&height=600&hl=en&q=medi-caps+university&t=&z=12&ie=UTF8&iwloc=B&output=embed',
};

// ──────────────────────────────────────────────
// Committee Members  (photos from DOCX)
// ──────────────────────────────────────────────
export const committeeData = {
  chiefPatron: [
    { name: 'Shri R.C. Mittal', designation: 'Chancellor', image: committeePhotos.rcMittal },
    { name: 'Shri Gopal Agrawal', designation: 'Pro Chancellor', image: committeePhotos.gopalAgrawal },
    { name: 'Shri Palash Garg', designation: 'OSD to Chancellor', image: committeePhotos.palashGarg },
    { name: 'Ms. Saloni Garg', designation: 'Vice President, Branding & Promotion', image: committeePhotos.saloniGarg },
    { name: 'Shri Akshit Garg', designation: 'Vice President, Administration & Finance', image: committeePhotos.akshitGarg },
  ],
  patron: [
    { name: 'Prof. D.K. Patnaik', designation: 'Vice Chancellor', image: committeePhotos.dkPatnaik },
    { name: 'Prof. Birajashis Pattnaik', designation: 'Pro Vice Chancellor', image: committeePhotos.birajashisPattnaik },
  ],
  generalChair: [
    { name: 'Dr. Ratnesh Litoriya', designation: 'Associate Dean of Engineering (Computing)', image: committeePhotos.ratneshLitoriya },
  ],
  generalCoChairs: [
    { name: 'Dr. Ajay Kulkarni', designation: 'Associate Dean of Engineering (Core)', image: committeePhotos.ajayKulkarni },
    { name: 'Dr. Kailash Chandra Bandhu', designation: 'Head of Department, CSE', image: committeePhotos.kailashBandhu },
    { name: 'Dr. Prashant Panse', designation: 'Associate Dean, Digitalization', image: committeePhotos.prashantPanse },
  ],
  publicationChairs: [
    { name: 'Dr. Sonu Kumar', designation: 'Publication Chair', image: committeePhotos.sonuKumar },
  ],
  financeChair: [
    { name: 'Prof. Rudresh Shah', designation: 'Finance Chair', image: committeePhotos.rudreshShah },
  ],
  publicityChair: [
    { name: 'Dr. Latika Jindal', designation: 'Publicity Chair', image: committeePhotos.latikaJindal },
  ],
  technicalProgramChair: [
    { name: 'Dr. Sanket Gupta', designation: 'Technical Program Committee Chair', image: committeePhotos.sanketGupta },
  ],
  executiveChair: [
    { name: 'Prof. Ashish Sharma', designation: 'Executive Committee Chair', image: committeePhotos.ashishSharma },
  ],
  advisoryCouncil: [
    { name: 'Prof. G S Tomar', designation: 'Distinguished Academic Advisor', image: committeePhotos.gsTomar_mp },
    { name: 'Prof. Manish Dixit', designation: 'Distinguished Academic Advisor', image: committeePhotos.manishDixit },
    { name: 'Prof. Jinendra Agrawal', designation: 'Distinguished Academic Advisor', image: committeePhotos.jinendraAgrawal },
    { name: 'Prof. Manmath Badapanda', designation: 'Distinguished Academic Advisor', image: committeePhotos.manmathBadapanda },
    { name: 'Prof. M P S Chawla', designation: 'Distinguished Academic Advisor', image: committeePhotos.mpSChawla },
    { name: 'Prof. Durgesh Kumar Mishra', designation: 'Distinguished Academic Advisor', image: committeePhotos.durgeshMishra },
  ],
  ieeeMPSection: [
    { name: 'Prof. G S Tomar', designation: 'Distinguished Academic Advisor', image: committeePhotos.gsTomar_mp },
    { name: 'Prof. Manish Dixit', designation: 'Distinguished Academic Advisor', image: committeePhotos.manishDixit },
    { name: 'Prof. Jinendra Agrawal', designation: 'Distinguished Academic Advisor', image: committeePhotos.jinendraAgrawal },
    { name: 'Prof. Manmath Badapanda', designation: 'Distinguished Academic Advisor', image: committeePhotos.manmathBadapanda },
    { name: 'Prof. M P S Chawla', designation: 'Distinguished Academic Advisor', image: committeePhotos.mpSChawla },
    { name: 'Prof. Durgesh Kumar Mishra', designation: 'Distinguished Academic Advisor', image: committeePhotos.durgeshMishra },
  ],
};

// ──────────────────────────────────────────────
// Advisory / Working Committee  (text only)
// ──────────────────────────────────────────────
export const programChair = [
  'Prof. P. Siluvainathan',
  'Prof. V. Ganeshan',
  'Prof. Abbas Ali Koser',
  'Prof. Shilpa Tripathi',
  'Prof. Vipin Sharma',
  'Prof. Sachin Solanki',
  'Prof. Vidhya Samad Barpha',
  'Prof. Vinit Gupta',
  'Prof. Santosh S. Raghuwanshi',
  'Prof. Chitresh Nayak',
  'Prof. Chayan Gupta',
  'Prof. R. K. Shukla',
  'Prof. Ravindra Pathak',
];

export const workingCommittee = [
  'Prof. Manoj Kumar Rawat',
  'Prof. Safdar Sardar Khan',
  'Prof. Sourabh Dave',
  'Prof. Manish Korde',
  'Prof. Sandeep K. Mathariya',
  'Prof. Shivani Patnaha',
  'Prof. Kriti Joshi',
  'Prof. Swati Vaidya',
  'Prof. Ankita Chourasia',
  'Prof. Rahul Nigam',
  'Prof. Bhavana Tiwari',
  'Prof. Digendra Singh Rathore',
  'Prof. Devendra Singh Bais',
  'Prof. Pankaj Malik',
  'Prof. Pinky S. Rane',
  'Prof. Jyotsana Goyal',
  'Prof. Amit Goud',
  'Prof. Chanda Chouhan',
  'Prof. Manoranjan K Sinha',
  'Prof. Sachin Yele',
  'Prof. Neha Kapil',
  'Prof. Jyoti Kukade',
  'Prof. Rahul Singh Pawar',
  'Prof. Dinesh Kumar Bhayal',
  'Prof. Puja Singh',
  'Prof. Smita Prajapati',
  'Prof. Priya Rathore',
  'Prof. Divya Chouhan',
  'Prof. Mudita Dave Nagar',
  'Prof. Lokendra Singh Songare',
  'Prof. Trishna Panse',
  'Prof. Ajeet Singh Rajput',
  'Prof. Ranjeet Osari',
  'Prof. Maya Baniya',
  'Prof. J Angelin Blessy',
  'Prof. Kamini Vishwakarma',
  'Prof. Prabhat Pandey',
  'Prof. Prithviraj Singh Chouhan',
  'Prof. Sachin Puntambekar',
  'Prof. Bharat Pahadiya',
  'Prof. Sheetal Bawane',
  'Prof. Pradeep Baniya',
  'Prof. Dharmendra Gupta',
  'Prof. Ashish Kumawat',
  'Prof. Dhiraj Kumar',
  'Prof. Hemant K Patahk',
  'Prof. Shweta Gupta',
  'Prof. Parag Raverkar',
  'Prof. Jayesh Surana',
  'Prof. Hemant Pal',
  'Prof. Suyog Munshi',
  'Prof. Diptanshu Pandya',
  'Prof. Dharmendra Mangal',
  'Prof. Rakesh Pandit',
  'Prof. Kumar Gaurav',
  'Prof. Mitesh Bargadiya',
  'Prof. Gaurav Sharma',
  'Prof. Ajaj Khan',
  'Prof. Sachin Solanki',
  'Prof. Nishant Shrivastava',
  'Prof. Mohammad Mazhar',
  'Prof. Ram Bansal',
  'Prof. Jayesh Barve',
  'Prof. Saurabh Jain',
  'Prof. Mandakini Ingle',
  'Prof. Vishal Sharma',
  'Prof. Seema Patidar',
  'Prof. Manish Mahajan',
  'Prof. Govind Patidar',
  'Prof. Sachin Yele',
  'Prof. Anusha Jain',
  'Prof. Shimpy Goyal',
  'Prof. Sonal Modh',
  'Prof. Hemlata Patel',
  'Prof. Vinita Rathore',
  'Prof. Margi Chhabre',
  'Prof. Anil Patidar',
  'Prof. Kuber Dutt Gautam',
  'Prof. Rohit Gupta',
  'Prof. Aayushi Bhardwaj',
  'Prof. Nitesh Kumar Soni',
  'Prof. Vasim Khan',
  'Prof. Yogesh Payasi',
  'Prof. Aditya Mandloi',
  'Prof. Sunil Kushwaha',
  'Prof. Hare Ram Jha',
  'Prof. Shruti Sharma',
  'Prof. Priyanka Dhasal',
  'Prof. Divya Kumawat',
  'Prof. Mahesh Patidar',
  'Prof. Shraddha Kumar',
  'Prof. Swati Mishra',
  'Prof. Sagar Pandya',
  'Prof. Varsha Sharda',
  'Prof. Shubhrata Kanungo',
  'Prof. Swati Tahiliani',
  'Prof. Ankit Gupta',
  'Prof. Ashish Shrivastav',
  'Prof. Madan Pal Singh',
  'Prof. Harsh Pratap Singh',
];

export const internationalAdvisoryCommittee1 = [
  'Prof. G S Tomar, Chairperson', 'Prof. Manish Dixit, Chair Elect',
  'Prof. Manmath Badapanda, Vice Chairperson', 'Prof. M P S Chawla, Secretary',
  'Prof. Vijayalaxmi, Secretary & WIE Chair', 'Prof. Durgesh Kumar Mishra, Chair Computer Society ',
  'Prof. Amit Raje, Chair PE Chapter', 'Prof. Jinendra Agrawal, TPAC Chair',
  'Prof. Amit Ojha, MANIT Bhopal', 'Prof. Somesh Kumar, Chair SAC',
  'Prof. Ashish Singhal, Vice-Chair SAC', 'Prof. Shaibal Mukherjee, IIT Indore',
  'Prof. Ayan Mondal, IIT Indore', 'Prof. Kamal Kumar Sethi, Chair Web Management',
  'Prof. Gaurav Bharti, Chair - Social Media', 'Prof. Neha Gupta, Vice Chair SIGHT',
  'Prof. Pinku Ranjan, ABV-IIITM Gwalior', 'Prof. Manish Sawle, Vice Chair, Ethics',
  'Prof. Ts. Dr Liu Li Li, TARUMT Malaysia', 'Prof. Ts. Dr Yip Mum Wai, TARUMT Malaysia',
  'Prof. Ir. Lim Joo Eng, TARUMT Malaysia', 'Prof. Anurag Srivastava, WS University USA',
  'Prof. Brij N Singh, North Dakota, USA', 'Prof. Kwang Lee, BB University USA',
  'Prof. T K Sarkar, Syracuse University NY', 'Prof. K. P. Wang, Sydney University Australia',
  'Prof. Rajesh Verma, VC RGPV', 'Prof. S.K. Singh, VC RTU Kota',
  'Prof. Bharat Charan Singh, Chairman MPPU RC', 'Prof. Istovan Erlich, DE University Germany',
  'Prof. L. Lai, City University London', 'Prof. K. N. Srivastava, ABB Sweden',
  'Prof. Ambrish Chandra, Montreal Canada', 'Prof. Jai Govind, AII Bangkok',
  'Prof. Fuishuan Wen, China', 'Prof. Maode Ma NTU, Singapore',
  'Prof. Satyendra Chauhan, NIT Jaipur', 'Prof. Prabah K. Panigrahi, IIIT Indore',
  'Prof. Jayor Singh, IIITDM Jabalpur', 'Prof. Mini S. Thomas, JMI New Delhi',
  'Prof. Sanjay Chauhan, GU Greater Noida', 'Prof. Akansay Dwivedi, IIT Roorkee',
  'Prof. Rhunush Kumar, IIT Indore', 'Prof. Govind Maheshwari, IET DAVV Indore',
  'Prof. N. P. Patidar, MANIT Bhopal', 'Prof. V. Kumar, MANIT Bhopal',
  'Prof. Shailendra Kumar Sharma, SGSITS Indore', 'Prof. H K Mahiyar, SGSITS Indore',
  'Prof. Sunil Luthra, Director, T&L Bureau, AICTE', 'Prof. Sukanta Basu, DT, Netherlands',
];

export const internationalAdvisoryCommittee2 = [
  'Prof. Ashwini Kumar Sharma, Graphic Era', 'Prof. Usha Chauhan, GU Greater Noida',
  'Prof. Ajay Shankar Singh, GU Greater Noida', 'Prof. S. C. Srivastava, IIT Kanpur',
  'Prof. J. Ram Kumar, IIT Kanpur', 'Prof. Avadhesh Kumar, PVC, GU',
  'Prof. Akhilesh Sharma, Manipal University', 'Prof. Premanand, SU, Noida',
  'Prof. Ravi Panwar, IIT BHU', 'Prof. Ranvir S. Panwar, NIMS Chandigarh',
  'Prof. Satish Sharma, MNIT Jaipur', 'Prof. Ripal Ranpura, Atmiya University',
  'Prof. Shailesh Tiwari, ABESEC Ghaziabad', 'Prof. N. P. Padhy, IIT Rorkee',
  'Prof. Vijay Kumar, University of Missouri', 'Prof. Manish Jambwal, Director, NATRAX Indore',
  'Prof. Shailesh Mishra, AVP, YASH technologies', 'Prof. Ashok Bhansali, Dean GLA University',
  'Prof. Subhakalshmi Kher, IGWA State University', 'Prof. Rajeev Tripathi, VC RGPV',
  'Prof. S.L. Maskara, Retd. Prof. IIT Kharagpur', 'Prof. O.P Vyas, IIIT Allahabad',
  'Prof. Subrat Sarangi, IIT Kharagpur', 'Prof. B.K. Saini, Vice Chairman SOA University',
  'Prof. Akhilesh Pandey, VC Vikram University', 'Prof. C.D. Patil, Professor, UEC Ujjain',
  'Prof. Aditya Trivedi, IIITM Gwalior', 'Prof. P. Tapaswi, IIITM Gwalior',
  'Prof. Anupam Shukla, IIITM Gwalior', 'Prof. R.C. Joshi, IIT Roorkee',
  'Prof. Lovi Raj Gupta, Pro Vice Chancellor, LPU', 'Prof. Nitin Upadhye, University of Modern Sciences',
  'Prof. Andrey Kuzmin, Man. Editor, BH Publishers', 'Prof. R K Pandit, Vice Chancellor, MITS Gwalior',
  'Prof. Vivek Shrivastava, NIT Uttarakhand', 'Prof. Kalyan Bandopadhyaya, IIT Kharagpur',
  'Prof. Santi Prasad Maity, Professor, IIEST', 'Prof. Akhesa Tiwary, MIT Gwalior',
  'Prof. Sanjeev Tarlekar, IET DAVV', 'Prof. Abhay Dubey, Professor, DAVV',
  'Prof. N.S. Choudhary, IIT Indore', 'Prof. P. Abdullah, CUSAT Kerala',
  'Prof. Abdul Wahid, MACU Hyderabad', 'Prof. D. Kannan, CUSAT Kerala',
  'Prof. Vargheese Paul, CUSAT Kerala', 'Prof. Bhammejit Singh, Professor NIT Kurukshetra',
  'Prof. Sukumar Mishra, IIT Delhi', 'Prof. Sanjeevkumar Padmanaban, SEU Norway',
  'Prof. Biplab Sikdar, NUS Singapore', 'Prof. Mohammad Khalid, Sunway University',
  'Prof. Dr. Ilhami Colak, Gazi University Ankara', 'Prof. Firoz Alam, RMIT University Australia',
  'Prof. Anant Dubey, Curtin University Australia', 'Prof. Ginbar Ensermu Geleta, Wollega University',
  'Prof. M. L. Kolhe, University of Agder, Norway', 'Prof. Anand Parey, IIT Indore',
  'Prof. Deepa Mitra, Qatar University', 'Prof. Asheesh Singh, MNNIT Allahabad',
  'Prof. S. K. Singh, IIIT Allahabad', 'Prof. Anil Gupta, Secretary KSI Indore',
  'Prof. Amrit Kumar Roy, NIT Hamirpur', 'Prof. Mayur Shirish Jain, IIT Indore',
  'Prof. R N Singh, DAVV Indore', 'Prof. Amit Pal, DTU Delhi',
  'Prof. Sagar Raji, DTU Delhi', 'Prof. Jatinder Kumar, NIT Kurukshetra',
  'Prof. Shweta Rathi, NIT Kurukshetra', 'Prof. RK Saksat, Professor IIT BHU',
  'Prof. (Dr.) Arun Prasad, Professor, IIT (BHU)', 'Prof. (Dr.) Ankit Gupta, Associate Professor, IIT (BHU)',
  'Prof. (Dr.) K.K. Panahi, Professor, IIT (BHU)', 'Prof. (Dr.) Sandeep Choudhary, Professor, IIT Indore',
  'Prof. (Dr.) Neelima Satyam, Professor, IIT Indore', 'Prof. (Dr.) Ravi Sharma, Professor, NIT Hamirpur',
  'Prof. (Dr.) R.B. Data, Professor, NIT Hamirpur',
  'Dr. Anurag Surana, Sr. GM Manager, PATH Mitra Indore',
  'Er. Rahul Goel, Zonal head & Vice president, Ultratech Cement Ltd',
];

// ──────────────────────────────────────────────
// Previous Conferences  (Medi-Caps University Conference Legacy)
// ──────────────────────────────────────────────
export const previousConferences = [
  { id: 'iceeta25', title: "International Conference IC-EETA'25", year: '2025', link: '#', image: 'pastConference3' },
  { id: 'ic4_2024', title: "2nd International Conference IC4'24", year: '2024', link: '#', image: 'pastConference4' },
  { id: 'cdan2016', title: 'CDAN International Symposium', year: '2016', link: '#', image: 'pastConference2' },
  { id: 'ic4_2015', title: "1st International Conference IC4'15", year: '2015', link: '#', image: 'pastConference1' },
];

// ──────────────────────────────────────────────
// Registration Fees (Aligned with DOCX Participant Categories)
// ──────────────────────────────────────────────
export const registrationFees = [
  { category: 'Academic Researchers (Faculty & Academicians)', indian: 'INR 5000/-', international: 'USD 150' },
  { category: 'Research Scholars & PhD Students', indian: 'INR 3500/-', international: 'USD 100' },
  { category: 'Industry Professionals (CXOs, Managers, Consultants)', indian: 'INR 8000/-', international: 'USD 250' },
  { category: 'Students (UG / PG Delegates)', indian: 'INR 2500/-', international: 'USD 80' },
];

// ──────────────────────────────────────────────
// Attendee Registration Fees
// ──────────────────────────────────────────────
export const attendeeRegistrationFees = [
  { category: 'Registration for Attendees / Observers (Non-Author)', indian: 'INR 1500/-', international: 'USD 100' },
];

// ──────────────────────────────────────────────
// Vision, Mission & Objectives (from DOCX Sections 3, 4, 5)
// ──────────────────────────────────────────────
export const conferenceVision = "To establish IC-AISET-2027 as the foremost annual international conference in Asia that advances evidence-based, interdisciplinary knowledge at the convergence of artificial intelligence, disruptive technologies, entrepreneurship, sustainability, and responsible management, thereby nurturing resilient, innovative, and future-ready organizations for a sustainable global economy.";

export const conferenceMission = [
  'Create a world-class interdisciplinary forum for researchers, practitioners, policymakers, and entrepreneurs to share frontier knowledge.',
  'Promote high-quality, peer-reviewed research leading to Scopus/WoS-indexed publications.',
  'Bridge the industry–academia divides through co-creation of actionable insights and policy recommendations.',
  'Mentor the next generation of scholars through doctoral colloquia and capacity-building workshops.',
  'Foster national and international research collaborations among universities, think tanks, and industry partners.',
  'Celebrate innovation through startup showcases, best paper awards, and technology exhibitions.'
];

export const conferenceObjectives = [
  'Attract and curate a minimum of 200 high-quality, peer-reviewed paper submissions from at least 25 countries, resulting in Scopus/WoS-indexed proceedings by December 2026.',
  'Secure at least six internationally distinguished keynote speakers from leading global universities, think tanks, and industry organizations representing a minimum of four continents.',
  'Conduct a doctoral colloquium benefiting at least 60 PhD scholars and a faculty development workshop training at least 80 faculty members in AI-enabled research methods.',
  'Achieve a minimum participant count of 200, with at least 40% representation from industry, government, and international delegates.',
  'Secure external funding from government bodies (ICSSR, DST, AICTE, UGC) and corporate sponsors.',
  'Publish a minimum of two edited volumes with international publishers (Taylor & Francis, Springer, Elsevier, or Emerald) and three special issues in ABDC/SCOPUS-listed journals within 12 months of the conference.'
];

// ──────────────────────────────────────────────
// Expected Outcomes and Impact (from DOCX Section 6)
// ──────────────────────────────────────────────
export const expectedOutcomes = {
  academic: [
    '200+ peer-reviewed papers presented and published.',
    '2+ edited books and 3+ special journal issues (Scopus/WoS-indexed).',
    '10+ international research collaborations initiated.',
    'Doctoral scholar networks formed across India and abroad.'
  ],
  industry: [
    '3 evidence-based policy briefs submitted to government bodies.',
    '30+ startups showcased; investor–entrepreneur connections facilitated.',
    'Industry roundtables producing actionable frameworks for AI adoption, ESG, and digital transformation.'
  ],
  institutional: [
    'Enhanced visibility and ranking metrics for Medi-Caps University.',
    'Strengthened NAAC/AACSB/EQUIS accreditation portfolio.',
    'Faculty publications, citations, and H-index improvements.',
    'MoUs and joint programmes with global partners.'
  ],
  societal: [
    'Knowledge outputs aligned with Viksit Bharat @2047 agenda.',
    "Contribution to India's startup and innovation ecosystem.",
    'Promotion of sustainable and responsible business practices.'
  ]
};

// ──────────────────────────────────────────────
// Distinguished Speaker Categories (from DOCX Section 8)
// ──────────────────────────────────────────────
export const distinguishedSpeakerCategories = [
  {
    id: 1,
    title: 'International Academic Leaders',
    desc: 'From Globally Recognized Universities and Research Institutions representing premier institutions across four continents.'
  },
  {
    id: 2,
    title: 'Distinguished National Academicians',
    desc: 'From Premier Indian Higher Education Institutions (IITs, IIMs, Central & State Universities).'
  },
  {
    id: 3,
    title: 'Industry Visionaries',
    desc: 'Driving Innovation, Technology, Business, and Digital Transformation across global enterprises.'
  },
  {
    id: 4,
    title: 'Entrepreneurs & Venture Leaders',
    desc: 'Venture Capitalists, Startup Ecosystem Founders, Research Leaders, and Emerging Innovation Champions.'
  }
];

// ──────────────────────────────────────────────
// Doctoral Colloquium (from DOCX Section 9)
// ──────────────────────────────────────────────
export const doctoralColloquium = {
  title: 'Doctoral Colloquium (Day 1)',
  subtitle: 'Pre-Conference Colloquium for PhD Scholars',
  eligibility: 'Designed for PhD scholars in their second year or beyond.',
  features: [
    'One-on-one mentoring sessions with senior faculty mentors from top Indian and international universities.',
    'Structured paper presentations with expert panel feedback.',
    'Career development sessions on publishing in high-impact journals.',
    'Networking dinners with keynote speakers and senior researchers.',
    'Best Doctoral Research Paper Award (sponsored category).'
  ]
};

// ──────────────────────────────────────────────
// Publication Plan (from DOCX Section 10)
// ──────────────────────────────────────────────
export const publicationPlan = [
  {
    channel: 'Conference Proceedings (ISBN)',
    details: 'Full peer-reviewed proceedings with registered ISBN.',
    timeline: 'Q1 2027'
  },
  {
    channel: 'Edited Book Vol. 1',
    details: "Springer / Taylor & Francis: 'AI, Disruptive Technologies & Future Organizations'",
    timeline: 'Q2 2027'
  },
  {
    channel: 'Special Journal Issues',
    details: 'Selected papers submitted for publication in ABDC / SCOPUS / WoS indexed journals within 12 months.',
    timeline: 'Within 12 Months'
  }
];

// ──────────────────────────────────────────────
// Speakers (to be announced)
// ──────────────────────────────────────────────
export const speakers = [];

// ──────────────────────────────────────────────
// Gallery Images
// ──────────────────────────────────────────────
export const galleryImages = [];

// ──────────────────────────────────────────────
// Paper Submission Content
// ──────────────────────────────────────────────
export const paperSubmissionInfo = {
  portalUrl: 'https://cmt3.research.microsoft.com/ICAISET2027',
  isOpen: true,
  contactEmail: 'icaiset@medicaps.ac.in',
  deadlines: [
    { id: 'abstract', label: 'Call for Abstract', date: 'October 30, 2026', icon: 'fa-bullhorn' },
    { id: 'earlyBird', label: 'Early-Bird Registration', date: 'November 15, 2026', icon: 'fa-hourglass-half' },
    { id: 'regularReg', label: 'Regular Registration Deadline', date: 'December 10, 2026', icon: 'fa-id-card' },
  ]
};

export const submissionGuidelines = [
  {
    title: 'APA 7th Edition Formatting',
    description: 'Manuscripts must strictly follow the APA 7th Edition format: Times New Roman 12pt font with 1.5 line spacing, structured headings, and standard academic margins.',
    icon: 'fa-file-lines text-blue-500'
  },
  {
    title: 'Original & Unpublished Research',
    description: 'Authors are invited to submit original, unpublished research papers, case studies, empirical studies, conceptual frameworks, and review articles aligned with the conference tracks.',
    icon: 'fa-shield-halved text-emerald-500'
  },
  {
    title: 'Double-Blind Peer Review',
    description: 'All submissions are subject to rigorous double-blind peer review by at least two independent expert reviewers to ensure academic rigor and quality.',
    icon: 'fa-user-check text-indigo-500'
  },
  {
    title: 'Strict Plagiarism Threshold (≤ 10%)',
    description: 'Papers must be strictly original. The similarity index must not exceed 10% on Turnitin. Submissions exceeding 10% similarity will be rejected immediately.',
    icon: 'fa-circle-exclamation text-amber-500'
  },
  {
    title: 'Electronic Submission via Portal',
    description: 'Manuscripts will only be accepted in electronic format (Microsoft Word .docx) through the online submission portal. Hard copies and email submissions are not accepted.',
    icon: 'fa-file-word text-cyan-500'
  },
  {
    title: 'High-Impact Publication Venues',
    description: 'Accepted papers will be published in ISBN proceedings and considered for edited volumes with Springer / Taylor & Francis and Scopus/WoS-listed journal special issues.',
    icon: 'fa-book-bookmark text-violet-500'
  }
];

export const submissionSteps = [
  {
    step: '01',
    title: 'Format Manuscript',
    description: 'Prepare your paper strictly using APA 7th Edition style, Times New Roman 12pt, 1.5 line spacing.'
  },
  {
    step: '02',
    title: 'Check Originality',
    description: 'Verify similarity index is under 10% on Turnitin and all sources are properly cited.'
  },
  {
    step: '03',
    title: 'Submit Electronically',
    description: 'Register and upload your manuscript through the official conference submission portal.'
  },
  {
    step: '04',
    title: 'Peer Review & Acceptance',
    description: 'Double-blind review conducted by two reviewers; acceptance decisions communicated via email.'
  }
];

// ──────────────────────────────────────────────
// Conference Tracks (from DOCX Section 7)
// ──────────────────────────────────────────────
export const conferenceTracks = [
  {
    id: 1,
    title: 'AI, Innovation and Disruptive Business Transformation',
    icon: 'fa-brain',
    topics: [
      'Artificial Intelligence & Enterprise Strategy',
      'Disruptive Innovation & Agile Business Models',
      'Robotic Process Automation & Workflow Intelligence',
      'Generative AI in Corporate Management',
      'Big Data Analytics & Business Intelligence',
      'Digital Transformation & Organizational Agility',
      'Technology Commercialization & Scaling',
      'Data-Driven Strategic Decision Making',
    ]
  },
  {
    id: 2,
    title: 'Sustainability, ESG and Circular Economy',
    icon: 'fa-seedling',
    topics: [
      'Environmental, Social & Governance (ESG) Frameworks',
      'UN Sustainable Development Goals (SDGs) Alignment',
      'Circular Economy Models & Waste Reduction',
      'Green Supply Chain & Sustainable Logistics',
      'Corporate Social Responsibility & Ethical Governance',
      'Climate Finance, Carbon Accounting & Trading',
      'Renewable Energy Integration in Enterprise',
      'Resilient Ecological & Economic Systems',
    ]
  },
  {
    id: 3,
    title: 'Marketing, Consumer Behaviour and Digital Engagement',
    icon: 'fa-chart-line',
    topics: [
      'AI-Driven Consumer Analytics & Predictive Insights',
      'Digital Consumer Behavior & Decision Dynamics',
      'Omnichannel Customer Experience & Social Commerce',
      'Personalization & Customer Journey Mapping',
      'Brand Management in Digital & Virtual Ecosystems',
      'Neuromarketing & Behavioral Economics',
      'Ethical Marketing & Digital Consumer Privacy',
      'MarTech Innovations & Digital Engagement Strategies',
    ]
  },
  {
    id: 4,
    title: 'Finance, FinTech and Digital Economy',
    icon: 'fa-coins',
    topics: [
      'Financial Technologies (FinTech) & RegTech Frameworks',
      'Blockchain, Smart Contracts & Decentralized Finance (DeFi)',
      'AI in Quantitative Investment & Risk Management',
      'Digital Currencies & Central Bank Digital Currency (CBDC)',
      'Sustainable Green Finance & Impact Investing',
      'Algorithmic Trading & Predictive Financial Modeling',
      'Financial Inclusion & Digital Payment Infrastructures',
      'Cybersecurity & Fraud Detection in Banking',
    ]
  },
  {
    id: 5,
    title: 'Human Capital, Smart Operations and Future-Ready Organizations',
    icon: 'fa-users',
    topics: [
      'Future of Work & Hybrid Workforce Management',
      'AI in Talent Acquisition & HR Predictive Analytics',
      'Smart Operations & Industry 4.0 Integration',
      'Organizational Resilience & Change Leadership',
      'Employee Well-being, Diversity & Workplace Culture',
      'Lean Operations, Agile Manufacturing & Smart Supply Chains',
      'Human-AI Collaboration & Cognitive Augmentation',
      'Strategic Agility & Future-Proof Corporate Governance',
    ]
  },
  {
    id: 6,
    title: 'Education, Research and Innovation Ecosystems',
    icon: 'fa-graduation-cap',
    topics: [
      'NEP 2020 & Higher Education Systemic Transformation',
      'AI-Enabled Pedagogies, EdTech & Immersive Learning',
      'Startup Incubators & Venture Creation Ecosystems',
      'Industry-Academia Co-Creation & Technology Transfer',
      'Viksit Bharat @2047 Innovation Roadmap',
      'Doctoral Research & Cross-Disciplinary Methodologies',
      'Open Science, Publication Ethics & IP Governance',
      'Youth Entrepreneurship & Social Innovation Initiatives',
    ]
  }
];

export const submissionFAQs = [
  {
    question: 'What is the required manuscript format for IC-AISET-2027?',
    answer: 'Submissions must follow the APA 7th Edition format, set in Times New Roman 12pt font with 1.5 line spacing. Margins, headers, and reference styles should strictly follow APA guidelines.'
  },
  {
    question: 'What is the maximum allowed plagiarism / similarity index?',
    answer: 'Plagiarism must not exceed 10% as verified by Turnitin. Papers exceeding this threshold will not be processed for peer review.'
  },
  {
    question: 'What types of submissions are accepted?',
    answer: 'Authors are invited to submit original, unpublished research papers, empirical studies, case studies, conceptual frameworks, and review articles aligned with any of the six conference tracks.'
  },
  {
    question: 'Where will accepted papers be published?',
    answer: 'Accepted and presented papers will be published in the Conference Proceedings with ISBN (Q1 2027), an Edited Book Volume with Springer/Taylor & Francis: "AI, Disruptive Technologies & Future Organizations" (Q2 2027), and selected articles in ABDC/Scopus/WoS indexed journals.'
  },
  {
    question: 'Is IC-AISET-2027 an in-person or virtual conference?',
    answer: 'IC-AISET-2027 is conducted in a Hybrid mode (In-Person + Virtual), allowing both in-person participation at Medi-Caps University, Indore and virtual presentation for international and outstation delegates.'
  },
  {
    question: 'What is the Doctoral Colloquium?',
    answer: 'The Doctoral Colloquium is scheduled for Day 1 for PhD scholars in their 2nd year or beyond. It offers one-on-one mentoring with senior faculty, paper presentations with expert feedback, career guidance on publishing in high-impact journals, and a Best Doctoral Research Paper Award.'
  },
  {
    question: 'Who should I contact for paper submission queries?',
    answer: 'For any paper submission queries, please contact the organizing team at icaiset@medicaps.ac.in or call the conference secretariat.'
  }
];

// ──────────────────────────────────────────────
// Unified export  (for one-line imports)
// ──────────────────────────────────────────────
export const conferenceData = {
  conferenceInfo,
  heroContent,
  navLinks,
  importantDates,
  contactInfo,
  socialLinks,
  footerContent,
  venueInfo,
  committeeData,
  programChair,
  workingCommittee,
  internationalAdvisoryCommittee1,
  internationalAdvisoryCommittee2,
  previousConferences,
  registrationFees,
  attendeeRegistrationFees,
  conferenceVision,
  conferenceMission,
  conferenceObjectives,
  expectedOutcomes,
  distinguishedSpeakerCategories,
  doctoralColloquium,
  publicationPlan,
  speakers,
  galleryImages,
  paperSubmissionInfo,
  submissionGuidelines,
  submissionSteps,
  conferenceTracks,
  submissionFAQs,
};
