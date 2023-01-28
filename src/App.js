import {Route, Routes} from "react-router-dom";

import {MainLayouts} from "./components/layouts/MainLayouts";

import {TodosPage} from "./api/pages/TodosPage";
import {AlbumsPage} from "./api/pages/AlbumsPage";
import {CommentsPage} from "./api/pages/CommentsPage";
import {HomePage} from "./api/pages/HomePage";
import {PostByCommentPage} from "./api/pages/PostByCommentPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayouts />}>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/todos'} element={<TodosPage/>}/>
            <Route path={'/albums'} element={<AlbumsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}>
                <Route path={'postByComment'} element={<PostByCommentPage/>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
