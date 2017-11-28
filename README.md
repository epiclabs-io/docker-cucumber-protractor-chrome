# Epiclabs Gherkin Test Runner
Docker image to run cucumber - gherkin protractor tests using selenium and headless chrome

This image is created to test both AngularJs and non Angular platforms, in fact, our google test doesn't need Angular :)

### Usage:

To run this image you need a **test folder** to be used as *Volume*, inside that folder you should have a **features** folder, with your **Gherkin** syntax features (see [cucumber gherkin](https://cucumber.io/docs/reference)) and inside **features**, you should have a **step_definitions** folder with your JS definitions (Using **protractor** and **chai**)

You can also specify more **protractor parameters**, like `--specs` pointing to one feature file.

Example command:

    docker run -it --volume {YOURTESTS}:/tests epiclabs/e2e-test-runner --baseUrl {URL} {otherparams}
    docker run -it --volume /home/tests:/tests epiclabs/e2e-test-runner  --baseUrl https://www.google.com --specs /tests/features/searching.feature


### Examples:

Two examples are included in the repository, one is to run some basic math operations in the browser, and the other is to search "news" in google. You can run them by cloning the github repository and typing:

    docker run -it --volume  full/repo/route/example:/tests epiclabs/e2e-test-runner --specs /tests/features/google.feature
    docker run -it --volume  full/repo/route/example:/tests epiclabs/e2e-test-runner --specs /tests/features/math.feature
    docker run -it --volume  /Users/alvaroescarcha/epic/github/docker-cucumber-protractor-chrome/example:/tests epiclabs/e2e-test-runner --baseUrl https://www.google.com --specs /tests/features/*.feature


### Debugging:

Messages from Selenium and WebDriver are ignored because they polute the console, you can change this by downloading the repository, modifying protractor.sh lines:

    node_modules/webdriver-manager/bin/webdriver-manager  update 2>/dev/null &
    node_modules/webdriver-manager/bin/webdriver-manager  start 2>/dev/null & 

to:

    node_modules/webdriver-manager/bin/webdriver-manager  update &
    node_modules/webdriver-manager/bin/webdriver-manager  start &

This way you can see errors coming from Selenium then do a `docker build .` and run the Image with the given hash instead of the dockerhub image
