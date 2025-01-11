# Fixing the Navbar Display Issue on LeetCode

## Problem Description

LeetCode uses Tailwind CSS classes to create separate navbars for different screen sizes:

- **Big Screen Navbar**:
  - Classes: `display-none md:display-flex`
  - Should only be visible on medium screens (`md:`) and larger.
- **Small Screen Navbar**:
  - Classes: `display-flex md:display-none`
  - Should only be visible on small screens and hidden on medium screens and larger.

### Root Cause
The `display-none` class in Tailwind is defined with `!important`, which overrides the responsive class `md:display-flex`. As a result, both navbars are hidden on larger screens, breaking the layout.

---

## Solution

To fix this, we dynamically remove the `display-none` class from the big screen navbar after React hydrates the DOM or updates it dynamically.
