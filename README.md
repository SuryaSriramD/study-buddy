# StudyBuddy | School Student Companion

## Overview
SrudyBuddy is a comprehensive digital platform designed to assist students in managing their academic life efficiently. It includes features such as a dashboard, schedule management, course materials, grade tracking, study timers, an AI coach, and much more. The application is built with a responsive UI and supports dark mode for better usability.

## Features

### 1. Dashboard
**Purpose:** Provides an overview of the student's academic life at a glance.  
**Implementation:** Located in `app/page.tsx`. Uses `MetricsCard`, `Schedule`, and `AssignmentsTable` components.  
**Benefits:** Quick access to key academic statistics, class schedules, and assignments.

### 2. Schedule
**Purpose:** Displays a student's full academic and extracurricular schedule.  
**Implementation:** Located in `app/schedule/page.tsx`. Uses `IntegratedCalendar`, `TodaysEvents`, and `SportsEvents` components.  
**Benefits:** Helps students manage time effectively by displaying all commitments in one place.

### 3. Courses
**Purpose:** Centralizes all course-related information and resources.  
**Implementation:** Located in `app/courses/page.tsx`. Provides tabs for `Courses`, `Books`, and `Notes`.  
**Benefits:** Streamlines access to course materials, improving organization and study efficiency.

### 4. Grades
**Purpose:** Tracks academic performance.  
**Implementation:** Located in `app/grades/page.tsx`. Displays grades in a tabular format with visual indicators for trends.  
**Benefits:** Helps students monitor progress and identify areas for improvement.

### 5. Study Timer (Pomodoro Technique)
**Purpose:** Aids in time management through structured study sessions.  
**Implementation:** Located in `app/study-timer/page.tsx`. Uses React hooks to alternate between study and break periods.  
**Benefits:** Enhances focus and prevents burnout with controlled work-break cycles.

### 6. AI Coach
**Purpose:** Provides personalized academic assistance using AI.  
**Implementation:** Located in `app/ai-coach/page.tsx`. Uses OpenAI's GPT model to generate responses.  
**Benefits:** Offers on-demand tutoring, explanations, and study notes generation.

### 7. Resource Library
**Purpose:** Provides categorized access to educational resources.  
**Implementation:** Located in `app/resource-library/page.tsx`. Implements search, filters, and a card-based layout.  
**Benefits:** Helps students easily find study materials, past papers, and learning resources.

### 8. Support
**Purpose:** Offers various support channels for students.  
**Implementation:** Located in `app/support/page.tsx`. Includes FAQ, contact form, live chat, and bug reporting.  
**Benefits:** Ensures students receive assistance and guidance when needed.

### 9. Settings
**Purpose:** Allows users to personalize the app.  
**Implementation:** Located in `app/settings/page.tsx`. Includes profile settings, app preferences, study settings, and a dark mode toggle.  
**Benefits:** Customization options enhance user experience and engagement.

### 10. Authentication (Login/Signup)
**Purpose:** Secures user accounts and personalizes experiences.  
**Implementation:** Located in `app/login/page.tsx` and `app/signup/page.tsx`. Uses form inputs for user credentials.  
**Benefits:** Ensures data security and enables personalized interactions.

### 11. Responsive Layout
**Purpose:** Ensures usability across devices.  
**Implementation:** Uses a responsive sidebar layout in `app/layout.tsx` with dynamic adjustments.  
**Benefits:** Provides a seamless experience across different screen sizes.

### 12. Dark Mode
**Purpose:** Reduces eye strain and enhances UI customization.  
**Implementation:** Uses `ThemeProvider` in `contexts/ThemeContext.tsx` with a settings page toggle.  
**Benefits:** Improves usability in different lighting conditions.

## Conclusion
The School Student Companion provides an all-in-one solution for managing academic life. It streamlines scheduling, studying, and access to learning resources, enhancing productivity and engagement.

---
This document serves as a reference for the project's UI and functionality. For further details, please consult the implementation files.

