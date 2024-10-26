async function createRule() {
    const rule = document.getElementById("ruleInput").value;
    const response = await fetch('/create_rule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rule })
    });
    const data = await response.json();
    document.getElementById("result").textContent = JSON.stringify(data);
}

async function combineRules() {
    const response = await fetch('/combine_rules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    document.getElementById("result").textContent = JSON.stringify(data);
}

async function evaluateRule() {
    const response = await fetch('/evaluate_rule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    document.getElementById("result").textContent = `Evaluation Result: ${data.result}`;
}
