

## Revert Zirai İlaç Subcategories

Remove the 3 extra test items (Akarisit, Nematisit, Rodentisit) that were added to the "Zirai İlaç" group in `src/pages/Products.tsx`, reverting back to the original 3 items: Fungusit, İnsektisit, and Herbisit.

### Technical Details

**File: `src/pages/Products.tsx`**
- Remove the Akarisit, Nematisit, and Rodentisit entries (lines ~58-79) from the Zirai İlaç `items` array
- Keep only Fungusit, İnsektisit, and Herbisit

