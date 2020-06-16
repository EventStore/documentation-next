module.exports = [
    {
        title: "Getting Started",
        collapsable: true,
        children: [
            "getting-started/",
            "getting-started/which-api-sdk.md"
        ]
    },
    {
        title: "Installation",
        collapsable: true,
        children: [
            "installation/",
            "installation/setting-up-varnish-in-linux.md",
            "installation/deploy-kubernetes-aks.md",
            "installation/deploy-kubernetes-gke.md",
            "installation/uninstalling.md"
        ]
    },
    {
        title: "Configuration",
        collapsable: true,
        children: [
            "configuration/",
            "configuration/logging.md",
            "configuration/application.md",
            "admin-ui.md",
        ]
    },
    {
        title: "Clustering",
        collapsable: true,
        children: [
            "clustering/cluster-without-manager-nodes.md",
            "clustering/cluster-with-manager-nodes.md",
            "clustering/node-roles.md",
        ]
    },
    {
        title: "Security",
        collapsable: false,
        children: [
            "security/setting-up-ssl.md",
            "security/users-and-access-control-lists.md",
        ]
    },
    {
        title: "Operations",
        collapsable: true,
        children: [
            "operations/database-backup.md",
            "operations/stats-debug.md",
            "operations/ports-and-networking.md",
            "operations/default-directories.md",
            "operations/scavenging.md",
            "operations/64-bit-index.md",
        ]
    },
    {
        title: "Projections",
        collapsable: true,
        children: [
            "projections/",
            "projections/enable.md",
            "projections/system-projections.md",
            "projections/user-defined-projections.md",
            "projections/projections-config.md",
            "projections/debugging.md"
        ]
    },
    {
        title: "Event streams",
        collapsable: false,
        children: [
            "streams/metadata-and-reserved-names.md",
            "streams/deleting-streams-and-events.md",
            "streams/system-streams.md"
        ]
    },
    {
        title: "Advanced topics",
        collapsable: true,
        children: [
            "advanced/caching.md",
            "advanced/indexing.md",
        ]
    },
]