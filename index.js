#!/usr/bin/env node
import chalk from "chalk";

const width = 120; 
const center = (text) => text.padStart((width + text.length) / 2).padEnd(width);
const left = (text) => text.padEnd(width);

const divider = chalk.gray("-".repeat(width));

console.log(`

${chalk.bgWhite.blueBright.bold(center("Ajay Yadav"))}
${chalk.green(center("Software Engineer"))}

${chalk.gray("LinkedIn:")} https://www.linkedin.com/in/ajay-yadav-735380176/
${chalk.gray("GitHub:")}   https://github.com/Ajay-sys2-tech
${chalk.gray("LeetCode:")} https://leetcode.com/ajay_yadav/
${chalk.gray("Portfolio:")} https://ajay-yadav.vercel.app/
${chalk.gray("Email:")}    ajay@gmail.com
${chalk.gray("Phone:")}    XXXXXXXXXX

${divider}
${chalk.bgBlue.bold(left("Skills"))}
  ${chalk.cyan("Programming:")} Java, JavaScript, Python, HTML, CSS
  ${chalk.cyan("Tools & Tech:")} Node.js, Express.js, React.js, FastAPI, Django, Next.js, Redux, MySQL, PostgreSQL, MongoDB
                Git/GitHub, GCP, Docker, Kafka, Socket.io, GraphQL, OAuth, Jest, OOP, REST, CI/CD
  ${chalk.cyan("Core Competencies:")} Data Structures, Algorithms, Design Thinking

${divider}
${chalk.bgBlue.bold(left("Experience"))}
  ${chalk.underline.blue("Persistent Systems")} – Software Engineer (Sept 2023 – Present)
    • Implemented JWT + Google OAuth authentication for microservices  
    • Migrated Next.js 12 → 14, boosting performance  
    • Built Node.js REST APIs integrated with Shopify GraphQL Metaobjects  
    • Created responsive React.js frontend with real-time validation  
    • Optimized API performance with Worker Threads (50% faster response)  
    • Collaborated with seniors to debug, refactor, and reduce tech debt  

  ${chalk.underline.blue("Vitto Microfinance.Ai")} – Full Stack Intern (May 2023 – Sept 2023)
    • Optimized API/UI with pagination, CSV export  
    • Developed bulk notification system for Android users  
    • Migrated APIs from JavaScript → TypeScript  

  ${chalk.underline.blue("TCS")} – ML Intern (Jun 2022 – Jul 2022)
    • Built text analysis functions improving medical insights  

${divider}
${chalk.bgBlue.bold(left("Projects"))}
  • ${chalk.yellow("Social Sharing App")}: Responsive app with likes, comments, Google auth, Redux  
  • ${chalk.yellow("Real-time Notifications")}: Socket.io + Kafka, MongoDB storage  
  • ${chalk.yellow("Woogle Photos")}: Google Photos-like platform using Cloudinary  
  • ${chalk.yellow("Interactive Map Search")}: Mapbox GL + Algolia, geospatial querying & pagination  

${divider}
${chalk.bgBlue.bold(left("Achievements & Certifications"))}
  • GCP Associate Cloud Engineer Certified  
  • Solved 500+ Leetcode problems  

${divider}
${chalk.bgBlue.bold(left("Education"))}
  B.E. in Computer Science and Business System – Chandigarh University (2019–2023), CGPA: 7.6

${divider}
`);
