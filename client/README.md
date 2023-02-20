# Scamander Likeley's DMS

## Roadmap

[ ] Build out control logic:
    - Wrappers include flex/grid display, gap, children
    - Items include generic

[ ] Update api with style update
    - Tests/type for recieving style change (id, newstyles) in context
    - Test request on api side, console log should do
    - Wrapper function to handle request => write to file, update db etc

## Notes

Control Logic Heirarchy:
    This might inform build styles logic. Keep an eye out.

### Stories

If component is a wrapper
        - generic component styles
    & display is flex, show:
        - justify & align
        - gap
    & display is grid, show:
        - column #
        - row #
        - gap

If component is an item
        - generic component styles
    & type is Text, show:
        - Font size
        - Font color
        - Text justify (end middle)
    & type is Icon, show:
        - Icon
        - Icon size
        - Icon color
        - Icon placement (location in box, in relation to text, other?)
    & image, show:
        - img
        - fill
        - overflow
        - placement inside overflow box

Generic Styles:
    - padding
    - margin
    - border
    - width
    - height
    - background color

    * className

CreateStyles misses:
- Flex Gap
- Grid Gap for display Grid (not shown)
- Border toggle from true to false
- Sizing

