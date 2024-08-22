import React from 'react';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlesPage = () => {
  return (
    <>
      <Header />
      <div className="articles-page-container">
        <ArticleList />
      </div>
      <Footer />
    </>
  );
};

export default ArticlesPage;
