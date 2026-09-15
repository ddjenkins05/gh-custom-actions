(async () => {
    const core = await import('@actions/core');
    const exec = await import('@actions/exec');
    const github = await import('@actions/github');

    function run() {
        core.notice('Hello from my custom Java action');
    }

    run();
})();