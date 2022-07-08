import "./App.css";


const Aside = () => {
//     document.addEventListener('DOMContentLoaded', function(){
//         window.addEventListener('scroll', myFunctionForSticky);

//     var navbar = document.getElementById("navbar");
//     var sticky = navbar.offsetTop;
    
//     function myFunctionForSticky(){
//         if (window.pageYOffset >= sticky) {
//             console.log("window.pageYOffset >= sticky");
//           } else {
//             console.log("Not window.pageYOffset >= sticky");
//           }
//       if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//       } else {
//         navbar.classList.remove("sticky");
//       }
//     }
// })

  return (
    <div id="navbar">
      <div id="navbar3">Sidebar</div>
      <div class="content">
        <h3>Sticky Navigation Example</h3>
        <p>
          The navbar will stick to the top when you reach its scroll position.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>

      
        <button className="aside button">Button</button>
      </div>
    </div>
  );
};

export default Aside;
