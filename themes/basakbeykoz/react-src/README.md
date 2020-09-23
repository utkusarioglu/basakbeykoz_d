# BasakBeykoz React WP theme 

## UI structure

App Router contains fixed elements on the screen. Such as
Spinner,
Header,
Navigation,
Social buttons

All the scrolling elements are contained inside a div with the class
name "scrolling-elements". 

### CSS structure

All routes come with the following properties:
- type: page, post or others
- slug: page or post slug
- feature image status: divs are assigned has-feature-image, or no-feature-image class names depending on their contents
- title status: has-title is assigned if the content has a title
- post excerpt card status: has-post-excerpt-card 

#### Sections in CSS 

1- Reset styles
2- Root and div, and other global styles
3- Styles for fixed elements such as header
4- .body and other styles that apply to most pages, posts, blog and other common .body types
5- page styles
6- blog styles
7- post styles