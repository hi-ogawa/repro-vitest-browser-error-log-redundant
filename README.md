vitest browser mode redundant test error log?

```sh
#
# browser mode
#
$ pnpm test run
...

 RUN  v1.1.3 /home/hiroshi/Downloads/repro-vitest-browser-error-log-redundant
      Browser runner started at http://localhost:5173

stderr | unknown test
boom!                       ////// <-- redundant error log?
 ❯ test/repro.test.ts (1)
   × error

  [Failed Tests 1]

 FAIL  test/repro.test.ts > error
Error: boom!
 ❯ test/repro.test.ts:4:8
      2|
      3| test('error', async () => {
      4|   throw new Error("boom!")
       |        ^
      5| });
      6|
...

#
# non browser mode
#
$ pnpm test run -- --no-browser.enabled
...

 RUN  v1.1.3 /home/hiroshi/Downloads/repro-vitest-browser-error-log-redundant

 ❯ test/repro.test.ts (1)
   × error

  [Failed Tests 1]

 FAIL  test/repro.test.ts > error
Error: boom!
 ❯ test/repro.test.ts:4:9
      2|
      3| test('error', async () => {
      4|   throw new Error("boom!")
       |         ^
      5| });
      6|
...
```
