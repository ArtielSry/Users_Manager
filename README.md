# Users_Manager
Still working on it 

Requirements document:

Summary:
- The development will consist of the creation of a user manager for an elearning platform.

- The users will be presented in a paginated table format, which will allow them to be filtered, as well as perform the basic operations of creating, editing and deleting users.

- The objective of the development will be the presentation and validation of the idea in a private way, not being relevant aspects such as authentication or management of roles/permissions.

- The initial project will be divided into two phases:

    - Phase 1: Delivery of an initial prototype with the minimum functionality required.
    - Phase 2: Expansion of the initial prototype, with new functionalities complementary to the previous ones.
In case of validating the idea, it is intended to iterate on this development, to add progressive improvements.

Definition of entities:
  The system will manage a single "User" entity, made up of the following fields:

Username: Username.
    It may contain only lowercase letters and numbers.
    Accents will not be accepted.
    You cannot start with a number.
    No two users can exist with the same username.
    Its length must be between 6 and 15 characters.
Name: The first and last name of the user
    It may contain uppercase and lowercase letters, spaces, and hyphens.
    Accents are allowed.
    No word may begin or end with a hyphen.
    It may not contain multiple spaces, or hyphens, consecutively.
    Its length must be between 2 and 30 characters.
Role: The role of the user.
    A single role per user.
    The available roles will be "Teacher", "Student" or "Other".
Active: The activation status of the user. 
    Possible values are "Active" or "Inactive".
    
Requirements:
The following are the functional and non-functional requirements for the first functional version of the application.

During these requirements, the following will be discussed:

  - User: Person who uses the application.
  - Element: User that is part of the system, and that will be reflected in the table.

Functional requirements:

- The elements will be presented to the user in table format.
  
- The user can filter the elements based on the following criteria:
  - Filter by name: Free text that allows displaying only those elements whose "Name" contains the search term, in any position. This filter will not be case sensitive, but will be accent sensitive.
  - Filter by assets: Filter to show only active items.
  
- The user can order the elements based on the following criteria:
  - Default: The order of creation of the elements.
  - By Name, Alphabetical Ascending: Sorted alphabetically, ascending (a-z), by name.
  - By role: Sorted by their role. First “Teacher”, then “Student” and lastly “Other”.
  - By activation: By their activation status, first active and then inactive.
    
- The user will not be able to simultaneously use the filter of active elements and the order by activation.
  - If the filter of active elements is previously marked, it will not be possible to order the elements by activation.
  - In case of being previously ordered by activation, by checking the filter of active elements the default order will be recovered and said ordering option will not be available.
    
- The table of elements will be presented to the user in a paginated format.
   - The default size of the page will be 6 elements / page
   - The user will be able to modify this size between three possible values, 4, 6 and 8 elements / page
    - The navigation between pages must be consecutive, being able to advance only to the next / previous page if any.
      
- The user can add new elements to the table, through a form:
  - The "Username" and "Name" fields will initially be empty.
  - The "Active" field will initially be marked as "Inactive", and can be modified.
  - The "Role" field will initially be marked as "Teacher" and can be modified.
  - The fields of the form must be previously validated, before proceeding to its sending.
    
- The user will be able to edit the data of any element of the table, through a form:
  - The form will contain preloaded the current data of the element that is being edited.
  - The fields of the form must be previously validated, before proceeding to its sending.
    
- The user can remove any element from the table:
  - The item will be permanently removed.
  - Before deleting an item, the user will be prompted for confirmation.
    
Non-functional requirements:

- The application must be made using React, with the following limitations:
  - Version: 17 or higher.
  - Allowed Hooks: useState, useEffect and useContext.
  - Framework to use: Vite
  - The use of third-party component libraries such as Formik, React-Hook-Form, MaterialUI or NextUI is not allowed.
- The application must be compatible with modern browsers Chrome, Firefox and Safari.
- All data must be persisted in a single JSON file.
  - Said file must be consulted and modified through an API, generated using the json-server package, available in the main NPM and YARN package managers.
  - The server created with json-server should listen on port 4000.
  - The use of third-party libraries such as Axios is not allowed. All API calls should be handled using the native fetch tool.
  - The API should only be used to retrieve item data and persist new changes, not for filtering. The server must return the data of all the elements and the filtering must be done on the client.

- Regarding the visual section:
  - A design document will be provided, as well as all the necessary resources for its implementation.
  - The purely visual aspects, such as colors, fonts, shadows... are merely indicative. Its free modification is allowed.
  - The application will only have a desktop version, its implementation in responsive format not being necessary.
    
- Regarding CSS:
  - All CSS implementation must be done natively, using CSS or SCSS.
  - The use of CSS/SCSS modules is allowed.
  - The use of third-party CSS libraries, such as Bootstrap or Tailwind, is not allowed.
  - The use of third-party CSS-in-JS libraries, such as Styled-Components, is not allowed.
  - 
Additional requirements:

  - This section details additional requirements to be added in a second version, after having delivered the first functional version with all the previous requirements.

New functional requirements:

- The user will be able to choose the presentation format of the elements of the table, between the rows previously described and a format based on cards.
  
New non-functional requirements:

- The tasks of filtering, sorting and pagination of elements must be carried out directly on the server, using the API, instead of being carried out on the client.

