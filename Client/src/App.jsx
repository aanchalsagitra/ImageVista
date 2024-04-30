// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./CommonComponents/Header";
import { HomeSection, NewPost } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<HomeSection></HomeSection>}></Route>
          <Route path="/new-post" element={<NewPost></NewPost>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
