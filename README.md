_this project contains the source files for the workshop on 7-18-2016_


### 51 Minutes of your life belongs here:
- [Code Testability by Misko Hevery](https://app.pluralsight.com/library/courses/code-testability/table-of-contents)
- practice the things he teaches for 90 days
- watch it again after 3 months


### Importance of structure and shape
-----

![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/code_structure_1.png)

> the left side of the image contains production code. The right side contains tests for the production code. Pay special attention to the *shape* of the code.


![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/code_structure_2.png)

![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/code_structure_3.png)

![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/code_structure_4.png)

#### Things to Remember
- dificulty in unit tests comes from the code structure, not from what the code does.
- it is better to _bake in_ test code from the beginning by writing *testable* code
- do it to save time
- writing tests is a skill, and takes time like any other skill


#### Red Flags
- global state (AKA singleton pattern)
- hard coded *new* operator (specifically service type objects like file system and database)
- lack of dependency injection (impossible to control dependendices without complicated mocks)
- database/file system requests (inside of contructors or function blocks)


#### write tests first, drive the API

![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/ideal_and_not_ideal_ways_to_test.png)

![code structure](https://raw.githubusercontent.com/Wambosa/bootcamp_workshop_unit_tests/master/img/micro_development_model.png)

