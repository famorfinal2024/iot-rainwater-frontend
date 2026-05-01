# TODO: Make Settings Feature Functional

## Plan Overview
Make Menu settings panel fully functional (sub-sections) and irrigation schedule persistent via localStorage.

## Steps (0/9 completed)

### Phase 1: Persistence Setup
- [x] 1. Update src/data/systemData.js: Add load/save functions using localStorage for schedule data.
- [x] 2. Update src/components/set.jsx: In handleSave, save to localStorage via new save function.
- [x] 3. Update src/pages/Dashboard.jsx: Load schedule from localStorage on mount.

### Phase 2: Dark Mode Persistence
- [x] 4. Update src/pages/menu.jsx: Load darkMode from localStorage on mount, save on toggle.

### Phase 3: Settings Sub-Panels
- [x] 5. Update src/pages/menu.jsx: Add Notification Settings sub-panel (toggles, save localStorage).
- [ ] 6. Update src/pages/menu.jsx: Add Display Settings sub-panel (language, theme extend).
- [ ] 7. Update src/pages/menu.jsx: Add System Info sub-panel (display systemData).

### Phase 4: Styles & Polish
- [ ] 8. Update src/styles/menu.css: Add styles for sub-panels.

### Phase 5: Test & Complete
- [ ] 9. Test all features, update TODO completion, attempt_completion.

**Next step: 3**

