import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('36eb6e13-0e94-4993-bad4-2eb73afe707c', '1Bernardo_Schumm@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456uvw', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9559b1e7-ff77-4357-9918-c1c93694a356', '10Antwon.Kautzer11@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'def456uvw', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('191e40e7-f709-4dcd-879f-f5de6f2626d3', '28Karl.Schroeder8@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'ghi789rst', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c59b6b85-1332-428d-babd-4a801bcbfeb7', '37Kiara.Bode3@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=39', 'ghi789rst', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f9271816-39ff-46c8-b843-3b139685f9b8', '46Domenic.Paucek@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=48', 'def456uvw', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7674e00c-b3a1-45c4-97b7-17dc4aaf2745', '55Verda.Schumm@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'abc123xyz', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('6300713f-3501-4ca7-885b-4a460f02483f', '64Noel.OConnell@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=66', 'pqr345stu', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4', '73Fanny63@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'pqr345stu', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2d9f4cfd-71f1-49fd-9bc5-4d6c1b48ca0f', '82Zane_Conroy44@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=84', 'ghi789rst', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('02e36fd0-42e9-4021-9ebc-786f0ad71676', 'Machine Learning', 'Technical', 'A branch of artificial intelligence focused on building systems that learn from data.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('05d52d76-a215-4f7a-934f-70391e9e6e6f', 'Machine Learning', 'Technical', 'The delivery of computing services over the internet.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('95820988-ac5f-4942-bb92-a03525b473d4', 'Digital Marketing', 'Management', 'The process of inspecting cleansing transforming and modeling data.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('c34a4120-b9e4-4098-b2c2-4e95ba4b2b5c', 'Project Management', 'Marketing', 'The use of digital channels to promote or market products and services.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('b033f8eb-d779-4f0a-93d2-6efca811ad09', 'Data Analysis', 'Technical', 'The process of inspecting cleansing transforming and modeling data.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('24ba5394-d824-4da8-9974-1a59d822f920', 'Machine Learning', 'Marketing', 'The practice of leading the work of a team to achieve goals and meet success criteria.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('188556cd-838b-4e52-9d9a-a9339270af62', 'Cloud Computing', 'Technical', 'The use of digital channels to promote or market products and services.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('1e12c39e-388d-41ad-b536-39972f7d768a', 'Data Analysis', 'Marketing', 'The process of inspecting cleansing transforming and modeling data.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('0954a90d-38fd-48c9-bfa3-23032a84d5c6', 'Data Analysis', 'Marketing', 'A branch of artificial intelligence focused on building systems that learn from data.');
INSERT INTO "Skill" ("id", "name", "category", "description") VALUES ('f320e5c9-559d-47e8-a268-b6cdf5cd0ba2', 'Data Analysis', 'Technical', 'The practice of leading the work of a team to achieve goals and meet success criteria.');

INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('bdbaf889-dd04-4a73-a68b-b2a0d59f8638', 'Advanced Python Programming', 'Understand key principles of managing projects effectively.', 'Expert', 440);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('8de84e8e-77a2-46ca-bf0c-62a716e49c89', 'Data Science Fundamentals', 'Learn the basics of data analysis and visualization.', 'Beginner', 60);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('ec539787-c72c-4a8e-a718-0d909b5d3cf0', 'Project Management Essentials', 'Learn the basics of data analysis and visualization.', 'Advanced', 839);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('c22e61ef-a837-4cb9-bd2d-d9aa5d5cc315', 'Cybersecurity Basics', 'Learn the basics of data analysis and visualization.', 'Beginner', 388);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('992bc27d-0d68-4436-994d-6533d63d120d', 'Digital Marketing Strategies', 'Explore strategies for successful digital marketing campaigns.', 'Intermediate', 698);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('99f5a376-0668-45e1-a754-7ee41e80556d', 'Data Science Fundamentals', 'Gain foundational knowledge in protecting digital assets.', 'Expert', 206);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('714c72b7-67b8-454b-8eb2-54eb7c1bba06', 'Data Science Fundamentals', 'Master advanced concepts in Python for software development.', 'Advanced', 385);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('19dc8fcf-4a5d-430f-8ce8-b29e33c14f9e', 'Digital Marketing Strategies', 'Explore strategies for successful digital marketing campaigns.', 'Intermediate', 116);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('1888ac35-1fea-4c91-9e4a-ee9af6da4297', 'Cybersecurity Basics', 'Explore strategies for successful digital marketing campaigns.', 'Expert', 337);
INSERT INTO "LearningPath" ("id", "name", "description", "difficultyLevel", "estimatedDuration") VALUES ('466b4071-e27e-49cf-a919-b73c4332a4e0', 'Advanced Python Programming', 'Master advanced concepts in Python for software development.', 'Expert', 62);

INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('541a6cfc-f2fc-4961-828f-7fc16d9306cd', 'Product Manager', 'MarketGurus', 'Develop and maintain software applications.', 'Bachelors degree in Computer Science or related field.', 'Boston MA', '80000  100000', 'Pending');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('003feb9f-9ae5-481b-89a2-e3eda39c0f4a', 'Marketing Specialist', 'DesignHub', 'Develop and maintain software applications.', 'Experience in product management and agile methodologies.', 'Boston MA', '60000  80000', 'Pending');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('05e33310-efa4-4466-b40a-92d3297912d4', 'UX Designer', 'Innovatech', 'Develop and maintain software applications.', 'Proficiency in data analysis tools and techniques.', 'Boston MA', '100000  120000', 'Open');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('b97255f0-7486-4091-886d-33b611b54334', 'Data Analyst', 'TechCorp Inc.', 'Manage product lifecycle from concept to launch.', 'Bachelors degree in Computer Science or related field.', 'Boston MA', '100000  120000', 'Closed');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('de14f712-f73a-42be-b7be-45c1f69c0c84', 'Product Manager', 'DataSolutions LLC', 'Analyze data trends to support business decisions.', 'Proven track record in digital marketing and SEO.', 'San Francisco CA', '70000  90000', 'Pending');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('b3fb5831-9359-47a6-9234-6b11eeb4f36c', 'Product Manager', 'TechCorp Inc.', 'Develop and maintain software applications.', 'Bachelors degree in Computer Science or related field.', 'Austin TX', '70000  90000', 'Closed');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('f289dc83-7ced-46fa-ba4b-d70aa741f737', 'Software Engineer', 'DesignHub', 'Analyze data trends to support business decisions.', 'Strong portfolio showcasing UX design skills.', 'Austin TX', '80000  100000', 'Interviewing');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('f446ed41-51c4-4591-bec1-eefc0374953a', 'Software Engineer', 'Innovatech', 'Design user interfaces and improve user experience.', 'Bachelors degree in Computer Science or related field.', 'San Francisco CA', '60000  80000', 'Filled');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('1529eab1-81d7-4ea6-a2b5-45e90b97b3b3', 'Software Engineer', 'DataSolutions LLC', 'Create and execute marketing strategies to increase brand awareness.', 'Proficiency in data analysis tools and techniques.', 'New York NY', '50000  70000', 'Filled');
INSERT INTO "Job" ("id", "title", "company", "description", "requirements", "location", "salaryRange", "status") VALUES ('5c60fb36-5aa3-4779-bac8-4ad93c6ecde4', 'UX Designer', 'DataSolutions LLC', 'Create and execute marketing strategies to increase brand awareness.', 'Proficiency in data analysis tools and techniques.', 'Seattle WA', '70000  90000', 'Pending');

INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('bed8324b-6786-4c6a-b799-812c76a662e9', 'Creative Writing for Beginners', 'Learn the latest data science methods and tools.', 728, 'archived', 'c22e61ef-a837-4cb9-bd2d-d9aa5d5cc315');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('127d3e5d-f280-4e91-8373-c4a295b2da82', 'Digital Marketing Strategies', 'A comprehensive guide to protecting digital assets.', 866, 'archived', '99f5a376-0668-45e1-a754-7ee41e80556d');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('a9550255-458b-4a82-9bfc-76988444ffbe', 'Introduction to Cybersecurity', 'Explore the basics of crafting compelling narratives.', 274, 'archived', 'ec539787-c72c-4a8e-a718-0d909b5d3cf0');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('68ccba3a-bd6a-4337-be31-e18c9dcbad53', 'Project Management Essentials', 'A comprehensive guide to protecting digital assets.', 987, 'active', '19dc8fcf-4a5d-430f-8ce8-b29e33c14f9e');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('5e20d346-8b40-4b9a-95f4-6abbecd2ea46', 'Introduction to Cybersecurity', 'Learn the latest data science methods and tools.', 624, 'archived', '19dc8fcf-4a5d-430f-8ce8-b29e33c14f9e');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('f2d1b7db-6eb3-4735-a05e-e697d10af5b4', 'Project Management Essentials', 'Strategies to enhance your online marketing efforts.', 715, 'completed', '1888ac35-1fea-4c91-9e4a-ee9af6da4297');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('e1266244-a7a2-48e4-9017-1fc443b2b4de', 'Digital Marketing Strategies', 'A comprehensive guide to protecting digital assets.', 91, 'inactive', '714c72b7-67b8-454b-8eb2-54eb7c1bba06');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('53885281-4393-44e6-9680-c1571c795752', 'Introduction to Cybersecurity', 'Explore the basics of crafting compelling narratives.', 68, 'upcoming', '466b4071-e27e-49cf-a919-b73c4332a4e0');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('6c481cd5-082f-457c-a2b4-80522173ba57', 'Advanced Data Science Techniques', 'Explore the basics of crafting compelling narratives.', 961, 'inactive', '992bc27d-0d68-4436-994d-6533d63d120d');
INSERT INTO "Course" ("id", "title", "description", "duration", "status", "learningPathId") VALUES ('35e8f07c-3bf3-4ea8-9fe1-63a4ab4a09b8', 'Creative Writing for Beginners', 'Explore the basics of crafting compelling narratives.', 662, 'archived', 'bdbaf889-dd04-4a73-a68b-b2a0d59f8638');

INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('771223ae-57c8-438a-bc68-0faa7af8dcfb', 'Software Engineering', 'Education', 'https://i.imgur.com/YfJQV5z.png?id=313', 'Available', 'Specializes in leadership and personal development.', '191e40e7-f709-4dcd-879f-f5de6f2626d3');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('226b130f-78b8-4551-aca3-846b99d451b9', 'Project Management', 'Healthcare', 'https://i.imgur.com/YfJQV5z.png?id=319', 'Available', 'Dedicated to guiding individuals through career transitions.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('9da3d87d-294e-45f5-bda4-eb082f822e35', 'Software Engineering', 'Education', 'https://i.imgur.com/YfJQV5z.png?id=325', 'Unavailable', 'Passionate about helping professionals achieve their career goals.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('ac8fe43f-eb37-4bff-bd1b-2f3e244ff5fb', 'Project Management', 'Finance', 'https://i.imgur.com/YfJQV5z.png?id=331', 'Available', 'Specializes in leadership and personal development.', '9559b1e7-ff77-4357-9918-c1c93694a356');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('bc759ee9-bc8b-4c37-bee3-a225ea15ea99', 'Project Management', 'Healthcare', 'https://i.imgur.com/YfJQV5z.png?id=337', 'Unavailable', 'Dedicated to guiding individuals through career transitions.', '6300713f-3501-4ca7-885b-4a460f02483f');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('28890ebd-2247-42d2-b05b-078d832fad95', 'Leadership Development', 'Finance', 'https://i.imgur.com/YfJQV5z.png?id=343', 'Unavailable', 'Passionate about helping professionals achieve their career goals.', '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('6f6d12ce-35e6-4a47-9ff3-0200f151d168', 'Data Science', 'Technology', 'https://i.imgur.com/YfJQV5z.png?id=349', 'Available', 'Committed to providing personalized career advice.', '191e40e7-f709-4dcd-879f-f5de6f2626d3');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('dfb005e2-a272-4488-b874-bf7ffae56263', 'Digital Marketing', 'Finance', 'https://i.imgur.com/YfJQV5z.png?id=355', 'Unavailable', 'Experienced mentor with a background in tech startups.', '191e40e7-f709-4dcd-879f-f5de6f2626d3');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('5dd86ac3-1e00-4a22-85b9-e79be9629508', 'Digital Marketing', 'Technology', 'https://i.imgur.com/YfJQV5z.png?id=361', 'Unavailable', 'Passionate about helping professionals achieve their career goals.', '9559b1e7-ff77-4357-9918-c1c93694a356');
INSERT INTO "Mentor" ("id", "expertise", "industry", "hourlyRate", "availabilityStatus", "bio", "userId") VALUES ('13586bea-b248-47b8-868e-b9fc770686f0', 'Data Science', 'Finance', 'https://i.imgur.com/YfJQV5z.png?id=367', 'Available', 'Passionate about helping professionals achieve their career goals.', '2d9f4cfd-71f1-49fd-9bc5-4d6c1b48ca0f');

INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('d97f827a-d40c-41e8-968c-f5c2e0c7bc7f', 'Novice', true, '7674e00c-b3a1-45c4-97b7-17dc4aaf2745', '1e12c39e-388d-41ad-b536-39972f7d768a');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('6b152a0a-5cc0-4e0e-9a6d-c40af21fe539', 'Advanced', true, 'f9271816-39ff-46c8-b843-3b139685f9b8', '95820988-ac5f-4942-bb92-a03525b473d4');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('069130dd-3cf8-42d8-bc3f-5c55e5e74c86', 'Advanced', true, 'f9271816-39ff-46c8-b843-3b139685f9b8', '188556cd-838b-4e52-9d9a-a9339270af62');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('8cae8e1e-fa7c-4fa0-b564-b1b2e1922e48', 'Beginner', false, '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4', 'b033f8eb-d779-4f0a-93d2-6efca811ad09');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('a377979f-fbe7-404d-afb2-1c608132e67c', 'Advanced', true, '7674e00c-b3a1-45c4-97b7-17dc4aaf2745', '188556cd-838b-4e52-9d9a-a9339270af62');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('3dd73d8f-bd45-4444-bf85-873ac2d5cfbb', 'Novice', true, '36eb6e13-0e94-4993-bad4-2eb73afe707c', 'c34a4120-b9e4-4098-b2c2-4e95ba4b2b5c');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('68a3a845-b93c-4d5b-9de2-5692af585d58', 'Beginner', false, '6300713f-3501-4ca7-885b-4a460f02483f', '1e12c39e-388d-41ad-b536-39972f7d768a');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('09dcb0e8-14e3-4d0f-9679-45f222a9ae63', 'Novice', true, 'c59b6b85-1332-428d-babd-4a801bcbfeb7', 'b033f8eb-d779-4f0a-93d2-6efca811ad09');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('032d6331-079b-41d7-bc19-e609feac3232', 'Expert', false, 'c59b6b85-1332-428d-babd-4a801bcbfeb7', 'f320e5c9-559d-47e8-a268-b6cdf5cd0ba2');
INSERT INTO "UserSkill" ("id", "proficiencyLevel", "verified", "userId", "skillId") VALUES ('1dfbd8f8-2375-4707-87a3-12d4a6392489', 'Novice', false, '6300713f-3501-4ca7-885b-4a460f02483f', '1e12c39e-388d-41ad-b536-39972f7d768a');

INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('d5a485eb-4a52-4b86-b790-1292d34f0a0f', 15, '2025-01-12T02:01:10.338Z', 'completed', 'c59b6b85-1332-428d-babd-4a801bcbfeb7', '5e20d346-8b40-4b9a-95f4-6abbecd2ea46');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('16087d9c-bbd4-451b-8249-905bd068db83', 345, '2025-03-02T14:30:33.860Z', 'completed', '7674e00c-b3a1-45c4-97b7-17dc4aaf2745', '5e20d346-8b40-4b9a-95f4-6abbecd2ea46');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('7ce910b6-4365-42c4-870d-3921aa50f690', 995, '2024-12-28T15:14:57.501Z', 'in_progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bed8324b-6786-4c6a-b799-812c76a662e9');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('d510e1a1-2e37-477a-97f5-0f83f0750433', 336, '2024-04-14T11:26:23.792Z', 'completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a9550255-458b-4a82-9bfc-76988444ffbe');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('1cd89e7b-07c8-4bd9-ad0d-a9a65304e4b6', 779, '2025-08-05T12:58:56.280Z', 'not_started', '2d9f4cfd-71f1-49fd-9bc5-4d6c1b48ca0f', 'f2d1b7db-6eb3-4735-a05e-e697d10af5b4');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('ec63c4b5-aa38-4c66-9b98-e12c54d2db94', 913, '2025-10-01T19:52:09.139Z', 'completed', '191e40e7-f709-4dcd-879f-f5de6f2626d3', '35e8f07c-3bf3-4ea8-9fe1-63a4ab4a09b8');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('06ea69d0-a0f4-4659-b68e-d2f2c018347a', 895, '2025-08-12T07:58:31.753Z', 'not_started', '7674e00c-b3a1-45c4-97b7-17dc4aaf2745', '68ccba3a-bd6a-4337-be31-e18c9dcbad53');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('3e34fb2d-2a68-42d4-8c64-9abfa9ed84c4', 100, '2024-06-25T13:34:20.943Z', 'in_progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bed8324b-6786-4c6a-b799-812c76a662e9');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('5b0085c8-2df8-49d5-8542-35bdf9fd9136', 507, '2024-06-28T22:26:19.839Z', 'in_progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e1266244-a7a2-48e4-9017-1fc443b2b4de');
INSERT INTO "UserCourse" ("id", "progress", "completionDate", "status", "userId", "courseId") VALUES ('848d2fa6-facc-498d-8ba2-7f3e9066e921', 365, '2024-01-25T13:49:23.771Z', 'completed', '2d9f4cfd-71f1-49fd-9bc5-4d6c1b48ca0f', 'f2d1b7db-6eb3-4735-a05e-e697d10af5b4');

INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('836069e9-2faf-4e0c-9794-7dd5e21adae1', '2023-12-29T22:55:40.076Z', 'applied', 'c59b6b85-1332-428d-babd-4a801bcbfeb7', '05e33310-efa4-4466-b40a-92d3297912d4');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('2fa32b65-37bc-468b-97e4-f435e4809c6e', '2024-03-01T16:52:13.928Z', 'applied', '191e40e7-f709-4dcd-879f-f5de6f2626d3', '003feb9f-9ae5-481b-89a2-e3eda39c0f4a');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('b6d59e34-a9f1-4450-bb65-bd5a4fed4df4', '2025-04-20T23:19:18.373Z', 'offered', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5c60fb36-5aa3-4779-bac8-4ad93c6ecde4');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('3deb48b7-0ab6-4db7-9fbb-c452ad397f47', '2024-07-15T13:37:34.861Z', 'accepted', 'c59b6b85-1332-428d-babd-4a801bcbfeb7', '5c60fb36-5aa3-4779-bac8-4ad93c6ecde4');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('d6f4f720-56fb-4166-9598-c8cf78ba899d', '2023-12-04T16:02:03.606Z', 'accepted', '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4', 'de14f712-f73a-42be-b7be-45c1f69c0c84');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('c6db22b7-56f1-46fe-a59c-4e6799ce0c99', '2025-09-01T03:34:24.233Z', 'offered', '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4', '541a6cfc-f2fc-4961-828f-7fc16d9306cd');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('414349a9-3644-458a-8d68-63973f47ee2d', '2025-04-16T17:36:30.348Z', 'rejected', '6300713f-3501-4ca7-885b-4a460f02483f', 'f446ed41-51c4-4591-bec1-eefc0374953a');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('49916b24-97a4-4e38-a01b-d61e907e9556', '2025-08-28T15:10:57.254Z', 'rejected', '191e40e7-f709-4dcd-879f-f5de6f2626d3', 'de14f712-f73a-42be-b7be-45c1f69c0c84');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('4ac4a589-1151-4356-afd2-bfd08d6f1be0', '2025-07-17T15:22:11.776Z', 'rejected', '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4', '5c60fb36-5aa3-4779-bac8-4ad93c6ecde4');
INSERT INTO "UserJob" ("id", "applicationDate", "status", "userId", "jobId") VALUES ('6adb23b7-c22a-4744-a28f-143281c90601', '2025-04-18T12:32:06.472Z', 'accepted', '2d9f4cfd-71f1-49fd-9bc5-4d6c1b48ca0f', '541a6cfc-f2fc-4961-828f-7fc16d9306cd');

INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('6157bcfb-fe2f-4408-ac36-ca8be86f02bf', '2024-01-27T17:29:10.360Z', 681, 'canceled', 'Review progress on current projects.', '13586bea-b248-47b8-868e-b9fc770686f0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('49662964-5619-4710-98af-bc8eaab98d18', '2024-08-01T04:47:03.829Z', 752, 'canceled', 'Focus on improving communication skills.', 'dfb005e2-a272-4488-b874-bf7ffae56263', 'f9271816-39ff-46c8-b843-3b139685f9b8');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('868d7b97-fb96-49d1-a225-316801ed024b', '2025-09-03T00:34:30.283Z', 932, 'rescheduled', 'Plan next steps for skill development.', '771223ae-57c8-438a-bc68-0faa7af8dcfb', '6300713f-3501-4ca7-885b-4a460f02483f');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('efb3942f-808e-44ff-9a30-8b57425f4da5', '2025-03-18T19:51:14.735Z', 716, 'inprogress', 'Discuss career transition strategies.', '28890ebd-2247-42d2-b05b-078d832fad95', '0b0f6fac-9d3c-41af-b42a-d64b8cdf24f4');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('02adc0e0-81b3-4897-995d-d1901798e1de', '2024-04-16T03:51:17.202Z', 62, 'completed', 'Review progress on current projects.', '9da3d87d-294e-45f5-bda4-eb082f822e35', '7674e00c-b3a1-45c4-97b7-17dc4aaf2745');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('4f4c450a-dbcf-4022-98c3-7b81b88969b1', '2025-09-01T07:51:31.336Z', 474, 'inprogress', 'Discuss career transition strategies.', 'bc759ee9-bc8b-4c37-bee3-a225ea15ea99', '9559b1e7-ff77-4357-9918-c1c93694a356');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('8b98ef3c-1ac4-4a78-af04-c33be93adbce', '2024-10-26T06:11:17.710Z', 824, 'scheduled', 'Explore new learning opportunities.', 'bc759ee9-bc8b-4c37-bee3-a225ea15ea99', 'c59b6b85-1332-428d-babd-4a801bcbfeb7');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('4a8fb858-5da5-4b82-be39-ebd8f180dc41', '2023-12-18T13:26:59.824Z', 430, 'rescheduled', 'Explore new learning opportunities.', '5dd86ac3-1e00-4a22-85b9-e79be9629508', '7674e00c-b3a1-45c4-97b7-17dc4aaf2745');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('e45311eb-c92e-42f5-a8f1-0bfca38c904a', '2024-10-12T20:01:00.487Z', 787, 'canceled', 'Explore new learning opportunities.', '226b130f-78b8-4551-aca3-846b99d451b9', '36eb6e13-0e94-4993-bad4-2eb73afe707c');
INSERT INTO "MentoringSession" ("id", "sessionDate", "duration", "status", "notes", "mentorId", "userId") VALUES ('6566c2ac-c427-4f45-b31d-cee6f2b4d645', '2024-05-06T00:34:34.795Z', 332, 'scheduled', 'Focus on improving communication skills.', '226b130f-78b8-4551-aca3-846b99d451b9', 'f9271816-39ff-46c8-b843-3b139685f9b8');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
