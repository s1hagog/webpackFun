// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     // btn.onclick = printMe;

//     element.appendChild(btn);
  
//     return element;
//   }

  // function getComponent(){
  //   return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
  //     const element = document.createElement('div');

  //     element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  //     return element;
  //   }).catch(error => 'An error loading the component')
  // }


  /**
   * 
   * Now lets try async functions
   */

  async function getComponent() {
    const element = document.createElement('div');

    const {default: _} = await import(/* webpackChunkName: "kimKardash" */'lodash');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return element;
  }

  
  // document.body.appendChild(component());

  getComponent.then(component => {
    document.body.appendChild(component);
  })