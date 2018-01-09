$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Home Page functionality on Royal Mail site",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12236559679,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 9749362141,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "verify page elements",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-page-elements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I should see the Links to Navigate",
  "rows": [
    {
      "cells": [
        "No",
        "Links"
      ],
      "line": 9
    },
    {
      "cells": [
        "1",
        "Track your item"
      ],
      "line": 10
    },
    {
      "cells": [
        "2",
        "Find a postcode"
      ],
      "line": 11
    },
    {
      "cells": [
        "3",
        "Get a price"
      ],
      "line": 12
    },
    {
      "cells": [
        "4",
        "Redelivery"
      ],
      "line": 13
    },
    {
      "cells": [
        "5",
        "Pay a fee"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "There should be a Search box",
  "keyword": "And "
});
formatter.match({
  "location": "Home.i_should_see_the_Links_to_Navigate(DataTable)"
});
formatter.result({
  "duration": 631898266,
  "status": "passed"
});
formatter.match({
  "location": "Home.there_should_be_a_Search_box()"
});
formatter.result({
  "duration": 124766803,
  "status": "passed"
});
formatter.after({
  "duration": 3317232398,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"\u003cLink\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"\u003cPage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;",
  "rows": [
    {
      "cells": [
        "Link",
        "Page"
      ],
      "line": 22,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;1"
    },
    {
      "cells": [
        "Track your item",
        "Track and Trace"
      ],
      "line": 23,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;2"
    },
    {
      "cells": [
        "Find a postcode",
        "Postcode Finder"
      ],
      "line": 24,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;3"
    },
    {
      "cells": [
        "Get a price",
        "Get a price"
      ],
      "line": 25,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;4"
    },
    {
      "cells": [
        "Redelivery",
        "Redelivery"
      ],
      "line": 26,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;5"
    },
    {
      "cells": [
        "Pay a fee",
        "Pay a fee"
      ],
      "line": 27,
      "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9063074692,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 6378986694,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"Track your item\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"Track and Trace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Track your item",
      "offset": 13
    }
  ],
  "location": "Home.click_the(String)"
});
formatter.result({
  "duration": 4195442673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Track and Trace",
      "offset": 18
    }
  ],
  "location": "Home.i_should_see_the(String)"
});
formatter.result({
  "duration": 2018123287,
  "status": "passed"
});
formatter.after({
  "duration": 2760407699,
  "status": "passed"
});
formatter.before({
  "duration": 6106688192,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 6314843973,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"Find a postcode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"Postcode Finder\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Find a postcode",
      "offset": 13
    }
  ],
  "location": "Home.click_the(String)"
});
formatter.result({
  "duration": 6872686591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Postcode Finder",
      "offset": 18
    }
  ],
  "location": "Home.i_should_see_the(String)"
});
formatter.result({
  "duration": 2033240517,
  "status": "passed"
});
formatter.after({
  "duration": 1509330915,
  "status": "passed"
});
formatter.before({
  "duration": 6358968848,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 8836430356,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"Get a price\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"Get a price\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Get a price",
      "offset": 13
    }
  ],
  "location": "Home.click_the(String)"
});
formatter.result({
  "duration": 5153372956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get a price",
      "offset": 18
    }
  ],
  "location": "Home.i_should_see_the(String)"
});
formatter.result({
  "duration": 2015899686,
  "status": "passed"
});
formatter.after({
  "duration": 2283594011,
  "status": "passed"
});
formatter.before({
  "duration": 6078174413,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 7607374049,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"Redelivery\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"Redelivery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Redelivery",
      "offset": 13
    }
  ],
  "location": "Home.click_the(String)"
});
formatter.result({
  "duration": 5504183969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Redelivery",
      "offset": 18
    }
  ],
  "location": "Home.i_should_see_the(String)"
});
formatter.result({
  "duration": 2051790655,
  "status": "passed"
});
formatter.after({
  "duration": 2428711326,
  "status": "passed"
});
formatter.before({
  "duration": 6446319617,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.I_am_on_the_Home_Page()"
});
formatter.result({
  "duration": 6777168933,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify Navigation links functionality",
  "description": "",
  "id": "verify-home-page-functionality-on-royal-mail-site;verify-navigation-links-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click the \"Pay a fee\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see the \"Pay a fee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pay a fee",
      "offset": 13
    }
  ],
  "location": "Home.click_the(String)"
});
formatter.result({
  "duration": 2637605489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay a fee",
      "offset": 18
    }
  ],
  "location": "Home.i_should_see_the(String)"
});
formatter.result({
  "duration": 2014028673,
  "status": "passed"
});
formatter.after({
  "duration": 1825639579,
  "status": "passed"
});
});