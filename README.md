# Portfolio

## Overview

**Portfolio** Showcasing my projects and resume to future employers and clients

<br>

## MVP

#### - Back End:

- Build a Ruby on Rails server
- Full CRUD functionality
- Add user authentication

#### - Front End:

- Build with React
- Full CRUD functionality for projects
- Add endorsments/comments to biography

#### - Styling

- Showcase a grey and yellow theme throughout portfolio
- Implement a greyscale for project portfolio

<br>

### Libraries and Dependencies

|   Library    | Description            |
| :----------: | :--------------------- |
|    React     | npm i react            |
| React Router | npm i react-router-dom |
|    axios     | npm i axios            |
|     JWT      | gem 'jwt'              |
|    Bcrypt    | gem 'bcrypt'           |

<br>

### Client (Front End)

#### Wireframes

##### - Desktop View

![Portfolio WireFrame](https://user-images.githubusercontent.com/83625775/129908299-13d357df-0d27-4518-9806-1c2ab49e9a97.png)

##### - Mobile View

#### Component Tree

![Screen Shot 2021-08-10 at 7 41 15 PM](https://user-images.githubusercontent.com/83625775/128961266-5410c0ad-110d-4d6c-a2ac-51785b5aaa34.png)

#### Component File Structure

```structure

src
|__ screens/
      |__ Home
      |__ Biography
      |__ Contact
      |__ Projects
      |__ ProjectDetails
      |__ AddProject
      |__ ProjectEdit
      |__ Login
|__ components/
      |__ Layout
      |__ Navbar
      |__ CommentForm
      |__ ProjectDelete
      |__ DisplayProjects
      |__ AllComments
      |__ Comment
|__ services/
      |__ api-config
      |__ auth
      |__ users
      |__ projects
      |__ comments
```

#### Time Estimates

| Task                    | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframe               |    H     |     8 hrs      |     6 hrs     |    8hrs     |
| Rails backend           |    H     |     5 hrs      |     5 hrs     |    5hrs     |
| Create CRUD Actions(BE) |    H     |     6 hrs      |     5 hr      |    5hrs     |
| Seed Data               |    H     |     2 hrs      |     2 hr      |     2hr     |
| Migration and Schema    |    H     |     1 hrs      |     1 hr      |     1hr     |
| Create CRUD Actions(FE) |    H     |     6 hrs      |     4 hr      |     1hr     |
| Routes                  |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Service Files           |    H     |     6 hrs      |     3 hrs     |    3 hrs    |
| Front End CRUD edits    |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Debugging               |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| CSS                     |    H     |     12 hrs     |    12 hrs     |   12 hrs    |
| TOTAL                   |          |     50 hrs     |    50 hrs     |   50 hrs    |

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-08-10 at 7 22 25 PM](https://user-images.githubusercontent.com/83625775/128959912-c51e0c73-3581-47bf-9aab-75a33f7c7dfb.png)

---

## Post-MVP

- Dashboard Styling
- Add Blog

## Code Showcase

```
useEffect(() => {
    const fetchUnapprovedComments = async () => {
      const comments = await getAllComments();
      let unapprovedComments = [];
      comments.map((comment) => {
        if (!comment.is_approved ? unapprovedComments.push(comment) : null);
        return unapprovedComments;
      });
      setUnapprovedComments(unapprovedComments);
    };
    fetchUnapprovedComments();
  }, [toggleFetch]);
```

## Code Issues & Resolutions

TBD
