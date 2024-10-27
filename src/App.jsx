const description = ['Fundamental', 'Crucial', 'Core']

function getRandInt(max) {
  return Math.floor(Math.random() * (max+1));
}



function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description[getRandInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function MealPlan() {
  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
        <h1>Day 1</h1>
        <h2>Breakfast</h2>
        <p>Avocado Toast</p>
        <h2>Lunch</h2>
        <p>Mushroom Alfredo</p>
        <h2>Dinner</h2>
        <p>Mapo Tofu</p>
    </div>
  );
}

function App() {
  return (
    <div id="main_container">
        <Counter />
        <div id="search_bar_container">
            
            <div id="search_bar">
                <label for="days_planned">Plan my meals for </label>
                <select id="days_planned" name="days_planned">
                    <option>1 day</option>
                    <option>2 days</option>
                    <option>3 days</option>
                    <option>4 days</option>
                    <option>5 days</option>
                    <option>6 days</option>
                    <option>7 days</option>
                </select>
                &nbsp;
                <input type="checkbox" id="soy_free" name="soy_free"/>
                <label for="soy_free">Soy-free</label>
                &nbsp;&nbsp;
                <input type="checkbox" id="gluten_free" name="gluten_free"/>
                <label for="gluten_free">Gluten-free</label> 
                
                <br /> <br />
                <input class="search" type="text" maxlength="20" placeholder="Enter your ingredients here"/>
                <button>Go</button> 
                
            </div>
                
            
        </div>
        <div id="search_result_container">
            <div id="search_result_header"><h1>3-day vegan meal plan</h1></div>
            <div id="all_plans_container">
                <MealPlan />
                <MealPlan />
                <MealPlan />
                <MealPlan />
                <MealPlan />
                <MealPlan />
                <MealPlan />
            </div>
            

            </div>
        </div>
  );
}

export default App;
