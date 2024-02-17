/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
      title: "NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
  
  
  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
  }


  /**
   * GET /
   * FAQs
   */
  exports.faq = async (req, res) => {
    const locals = {
      title: "FAQs - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('faq', locals);
  }