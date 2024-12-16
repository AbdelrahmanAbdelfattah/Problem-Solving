class Solution {
public:


vector<double> Dijkstra(int n, int src, const vector<vector<pair<int, double>>> &graph) {
    // Initialize distance array
    vector<double> distance(n, -INFINITY);

    // Priority queue to store nodes as {probability, node}, using max-heap
    priority_queue<pair<double, int>> pq;

    // Push source with probability 1.0
    pq.push({1.0, src});
    distance[src] = 1.0;

    while (!pq.empty()) {
        // Extract the node with the highest probability
        auto [currentCost, currentNode] = pq.top();
        pq.pop();

        // If the current cost is less than the stored distance, skip
        if (currentCost < distance[currentNode]) continue;

        // Traverse neighbors
        for (const auto &[v, w] : graph[currentNode]) {
            double newCost = currentCost * w;
            if (newCost > distance[v]) {
                distance[v] = newCost;
                pq.push({newCost, v});
            }
        }
    }

    return distance;
}

double maxProbability(int n, vector<vector<int>> &edges, vector<double> &succProb, int start_node, int end_node) {
    // Build the graph as adjacency list
    vector<vector<pair<int, double>>> graph(n);
    for (size_t i = 0; i < edges.size(); i++) {
        int u = edges[i][0];
        int v = edges[i][1];
        double w = succProb[i];
        graph[u].emplace_back(v, w);
        graph[v].emplace_back(u, w);
    }

    // Run Dijkstra's algorithm
    vector<double> dist = Dijkstra(n, start_node, graph);

    return dist[end_node] != -INFINITY ? dist[end_node] : 0.0;
}

// Example Usage
int main() {
    int n = 3;
    vector<vector<int>> edges = {{0, 1}, {1, 2}, {0, 2}};
    vector<double> succProb = {0.5, 0.5, 0.2};
    int start_node = 0;
    int end_node = 2;

    cout << maxProbability(n, edges, succProb, start_node, end_node) << endl;
    return 0;
}

};