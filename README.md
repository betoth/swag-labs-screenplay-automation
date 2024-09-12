
# Swag Labs Screenplay Automation

This is a test automation project for the **Swag Labs** site, using the **Playwright** framework and the **Screenplay Pattern** architecture. The goal of this project is to provide a scalable structure for automating user interface tests for the Swag Labs application, following best practices such as the **Page Object Model (POM)** and **Screenplay Pattern**.

## Website Under Test

The website being tested is [Swag Labs](https://www.saucedemo.com), which simulates an e-commerce platform. The tests focus on user login, adding items to the cart, and other user interactions.

### Credentials for Testing:

- **Accepted usernames**:
    - `standard_user`
    - `locked_out_user`
    - `problem_user`
    - `performance_glitch_user`
- **Password for all users**: `secret_sauce`

## Project Structure

This project is structured according to the **Screenplay Pattern**, which organizes the code into reusable components. Here's an overview of the folder structure:

```
swag-labs-screenplay-automation/
├── SwagLabs/
│   ├── actors/               # Actors define the role of the user performing actions
│   │   ├── actor.js
│   │   └── users.js
│   ├── pages/                # Page Object Models for each page in the application
│   │   ├── loginPage.js
│   │   └── inventoryPage.js
│   ├── abilities/            # Defines abilities the actor can use (e.g., BrowseTheWeb)
│   │   └── BrowseTheWeb.js
│   ├── tasks/                # Tasks represent a higher-level action performed by the actor
│   │   ├── login/
│   │   │   └── loginTask.js
│   │   ├── inventory/
│   │   │   └── addToCartTask.js
│   ├── interactions/         # Lower-level interactions (e.g., click, fill)
│   │   ├── Click.js
│   │   └── EnterCredentials.js
│   └── questions/            # Defines verifications or questions the actor can ask
│       ├── login/
│       │   └── ErrorMessage.js
│       ├── inventory/
│       │   └── CartItemCount.js
├── tests/                    # Test files for each feature or functionality
│   ├── login/
│   │   └── login.test.js
│   ├── inventory/
│   │   └── inventory.test.js
├── playwright.config.js       # Playwright configuration file
├── package.json               # Project dependencies and scripts
└── .env                       # Environment variables
```

### Key Components

- **Actor**: Represents the user performing actions in the system. An actor can be a specific type of user like `standard_user` or `locked_out_user`.
- **Tasks**: A task represents a higher-level action that an actor performs, such as logging in or adding an item to the cart.
- **Interactions**: Interactions are the building blocks of tasks, such as clicking a button or entering text into a field.
- **Questions**: Represents verifications or assertions that the actor asks about the system's state.

## Setup

### Prerequisites

- **Node.js** >= 12
- **Playwright**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/swag-labs-screenplay-automation.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory with the following content:

   ```bash
   BASE_URL=https://www.saucedemo.com
   ```

## Running the Tests

To run all tests, use:

```bash
npx playwright test
```

### Running with Report Generation

To generate and view an HTML report:

```bash
npx playwright show-report
```

### Running with Trace and Video Recording

The project is configured to record **trace** and **video** only in case of test failures. You can view the trace with the following command:

```bash
npx playwright show-trace test-results/<trace-file>.zip
```

## Configuring Playwright

All Playwright configurations can be customized in the `playwright.config.js` file.

- **Trace**: Set to `'retain-on-failure'` to capture trace files only for failed tests.
- **Video**: Set to `'retain-on-failure'` to capture videos only when tests fail.
- **Retries**: You can configure the number of retries in case a test fails.
- **Browsers**: Tests can be run in **Chromium**, **Firefox**, and **Webkit**. You can modify the `projects` section in `playwright.config.js` to run tests in different browsers.
