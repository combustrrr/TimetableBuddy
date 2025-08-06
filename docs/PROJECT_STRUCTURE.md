# TimetableBuddy Project Structure

## Overview
TimetableBuddy is a student registration system developed as part of SEWDL (Software Engineering Web Development Lab) coursework.

## Directory Structure

```
TimetableBuddy/
├── README.md                      # Project overview and setup instructions
├── public/                        # Static assets accessible by browser
├── src/                          # Source code directory
│   ├── pages/                    # HTML pages organized by feature
│   │   ├── auth/                 # Authentication related pages
│   │   │   └── register.html     # Student registration page (Exp 1)
│   │   └── dashboard.html        # Interactive lecture booking (Exp 3)
│   ├── assets/                   # Static assets (CSS, JS, images)
│   │   ├── css/                  # Stylesheets
│   │   │   ├── register.css      # Registration page styles (Exp 2)
│   │   │   └── dashboard.css     # Dashboard styles (Exp 3)
│   │   └── js/                   # JavaScript files
│   │       ├── register.js       # Registration validation (Exp 5)
│   │       └── dashboard.js      # Dashboard interactivity (Exp 3)
│   └── components/               # Reusable UI components (for future use)
└── docs/                         # Documentation and experiment tracking
    └── experiments/              # Lab experiment documentation
```

## Experiment Mapping

### Experiment 1: Document Creation
- **File**: `docs/Timetable_Buddy_Final_Document_Sarthak_Kulkarni_23101B0019.pdf`
- **Author**: Sarthak Kulkarni (23101B0019)
- **Status**: ✅ **COMPLETED**
- **Description**: Complete project documentation and analysis

### Experiment 2: Documentation Analysis
- **File**: `docs/SEWDL XP 2 23101B0019 Sarthak Kulkarni.pdf`
- **Author**: Sarthak Kulkarni (23101B0019)
- **Status**: ✅ **COMPLETED**
- **Description**: SEWDL lab experiment documentation

### Experiment 3: Interactive Web Page (HTML5 + CSS + JS) - TO BE COMPLETED BY AMBAR
- **Files**: `src/pages/dashboard.html`, `src/assets/css/dashboard.css`, `src/assets/js/dashboard.js`
- **Author**: Ambar (Team Member)
- **Status**: 🚧 **PENDING** - Requirements provided in `docs/experiments/EXPERIMENT_3_REQUIREMENTS.md`
- **Core Deliverable**: Interactive lecture booking interface with:
  - Color-coded capacity status (Green: <80%, Yellow: 80-95%, Red: 100%)
  - Progress bars showing booked/capacity ratio
  - "FULL" badges when capacity reached
  - "Reserve Seat" buttons with immediate feedback
  - Department filtering system
  - Responsive design with media queries

### Experiment 4: JavaScript Form Validation (Registration System)
- **File**: `src/assets/js/register.js`
- **Author**: Sarthak Kulkarni (23101B0019)
- **Requirements**: 
  1. First Name: Alphabets only, minimum 6 characters
  2. Password: Minimum 6 characters
  3. Email: Standard pattern name@domain.com
  4. Mobile: Exactly 10 digits
  5. Last Name and Address: Not empty
- **Enhanced Features**: Role-based signup, institutional email validation, success modal

## Team Collaboration Guidelines

### File Ownership
- **Document Creation (Exp 1)**: Sarthak - Project documentation ✅
- **Documentation Analysis (Exp 2)**: Sarthak - SEWDL lab documentation ✅
- **Interactive Dashboard (Exp 3)**: Ambar - Complete interactive lecture booking system 🚧
- **Registration System (Exp 4)**: Sarthak - JavaScript validation with supporting HTML/CSS ✅

### Branch Strategy
- `master`: Main production branch
- `experiment-X`: Feature branches for each experiment
- `feature/component-name`: Individual feature development

### Code Standards
- Use semantic HTML5 elements
- Follow BEM CSS methodology for class naming
- Use ES6+ JavaScript features
- Include experiment tags in comments
- Maintain consistent indentation (2 spaces)

## Development Setup

1. Clone the repository
2. Navigate to project directory
3. Start a local server (e.g., `python3 -m http.server`)
4. Access pages via `http://localhost:8000/src/pages/auth/register.html`

## File Naming Conventions
- HTML: `kebab-case.html`
- CSS: `kebab-case.css`
- JS: `kebab-case.js`
- Directories: `lowercase`

## Author
Sarthak Kulkarni (23101B0019)
Software Engineering Web Development Lab
