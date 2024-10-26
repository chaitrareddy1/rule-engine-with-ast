from flask import Flask, request, jsonify
from rule_engine import create_rule, combine_rules, evaluate_rule

app = Flask(__name__)

rules = []

@app.route('/create_rule', methods=['POST'])
def api_create_rule():
    rule_str = request.json.get('rule')
    rule = create_rule(rule_str)
    rules.append(rule)
    return jsonify({'message': 'Rule created successfully', 'rule': rule_str})

@app.route('/combine_rules', methods=['POST'])
def api_combine_rules():
    combined_rule = combine_rules(rules)
    return jsonify({'combined_rule': combined_rule})

@app.route('/evaluate_rule', methods=['POST'])
def api_evaluate_rule():
    data = request.json.get('data', {})
    result = evaluate_rule(combined_rule, data)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
