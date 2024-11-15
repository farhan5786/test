    // Sample data for search results
    const data = [
      "JavaScript Tutorial",
      "HTML & CSS Guide",
      "Learn Python",
      "Frontend Development",
      "Backend Programming",
      "Web Design Trends",
      "React.js Documentation",
      "Node.js Guide",
    ];

    // Show the search results
    function searchData() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const results = data.filter(item => item.toLowerCase().includes(query));
      const resultDiv = document.getElementById('searchResults');
      resultDiv.innerHTML = results.length > 0 ? results.join('<br>') : 'No results found';
    }

    // Show the Sign Up popup
    function openSignUpForm() {
      document.getElementById('signUpPopup').style.display = 'flex';
    }

    // Close the Sign Up popup
    function closeSignUpForm() {
      document.getElementById('signUpPopup').style.display = 'none';
    }

    // Toggle between Login and Register forms
    function toggleLoginRegister(formType) {
      const signUpForm = document.getElementById('signUpForm');
      if (formType === 'login') {
        signUpForm.innerHTML = `
          <h4>Login</h4>
          <input type="email" id="loginEmail" placeholder="Email" />
          <input type="password" id="loginPassword" placeholder="Password" />
          <button onclick="submitLoginForm()">Login</button>
        `;
      } else {
        signUpForm.innerHTML = `
          <h4>Register</h4>
          <input type="text" id="fullName" placeholder="Full Name" />
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button onclick="submitSignUpForm()">Submit</button>
        `;
      }
    }

    // Handle the Sign Up form submission
    function submitSignUpForm() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      alert(`Signed up with: ${fullName}, ${email}`);
      closeSignUpForm();
    }

    // Handle the Login form submission
    function submitLoginForm() {
      const loginEmail = document.getElementById('loginEmail').value;
      const loginPassword = document.getElementById('loginPassword').value;
      alert(`Logged in with: ${loginEmail}`);
      closeSignUpForm();
    }
