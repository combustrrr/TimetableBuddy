# Experiment 3 Requirements - For Ambar

## Assignment: Interactive Lecture Booking Dashboard

### Core Deliverable:
Interactive lecture booking interface showing capacity status

### Implementation Requirements:

#### Visual Indicators:
- [ ] Color-coded capacity status (Green: <80%, Yellow: 80-95%, Red: 100%)
- [ ] Progress bar showing booked/capacity ratio
- [ ] Clear "FULL" badge when capacity reached

#### User Interactions:
- [ ] "Reserve Seat" button per lecture
- [ ] Immediate visual feedback on booking action
- [ ] Disabled button state when lecture full

#### Data Display:
- [ ] Lecture title, time, location
- [ ] Numeric capacity counter (e.g., "38/50")
- [ ] Department filter dropdown

### Experiment Compliance Requirements:

#### 5+ HTML Tags to Use:
- [ ] `section`
- [ ] `div`
- [ ] `button`
- [ ] `span`
- [ ] `select`
- Plus any additional tags needed

#### 5+ CSS Properties to Use:
- [ ] Flexbox
- [ ] Colors
- [ ] Transitions
- [ ] Borders
- [ ] Media Queries
- Plus any additional properties needed

#### 5+ JavaScript Functions to Use:
- [ ] `querySelector`
- [ ] `addEventListener`
- [ ] `classList`
- [ ] `setAttribute`
- [ ] `setTimeout`
- Plus any additional functions needed

### Submission Deliverables:
- [ ] `dashboard.html` file
- [ ] `dashboard.css` file
- [ ] `dashboard.js` file

### Sample Data Structure (Use this in your JavaScript):
```javascript
const lecturesData = [
    {
        id: 1,
        title: "Introduction to Web Development",
        time: "09:00 - 10:30",
        location: "Room A-101",
        department: "cs",
        capacity: 50,
        booked: 35
    },
    {
        id: 2,
        title: "Database Management Systems",
        time: "11:00 - 12:30",
        location: "Room B-205",
        department: "cs",
        capacity: 40,
        booked: 38
    },
    // Add more lectures...
];
```

### File Locations:
- HTML: `src/pages/dashboard.html`
- CSS: `src/assets/css/dashboard.css`
- JS: `src/assets/js/dashboard.js`

### Integration Points:
- Navigation should link to registration page: `auth/register.html`
- Use consistent styling theme with the registration page
- Department options should match registration form

### Color Scheme Suggestions:
- Low capacity (Green): #27ae60
- Medium capacity (Yellow): #f39c12
- High/Full capacity (Red): #e74c3c
- Primary blue: #3498db

### Tips:
1. Start with basic HTML structure
2. Add CSS styling with the required properties
3. Implement JavaScript interactivity
4. Test on different screen sizes (use media queries)
5. Make sure all 5+ requirements for each technology are met

Good luck! This is your experiment to complete. 🚀
