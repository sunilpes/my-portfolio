---
entries:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    authors: "Vaswani et al."
    year: 2017
    tags: [transformers, nlp, ml]
    notes: "The foundational paper that introduced the transformer architecture. Changed everything in NLP and beyond."

  - title: "MapReduce: Simplified Data Processing on Large Clusters"
    url: "https://research.google/pubs/pub62/"
    authors: "Dean & Ghemawat"
    year: 2004
    tags: [distributed-systems, data-engineering]
    notes: "Google's original MapReduce paper. Still a great read for understanding large-scale batch processing fundamentals."

  - title: "The Dataflow Model"
    url: "https://research.google/pubs/pub43864/"
    authors: "Akidau et al."
    year: 2015
    tags: [streaming, data-engineering, distributed-systems]
    notes: "The paper behind Apache Beam. Unified batch and streaming under a single model — essential reading for anyone working on real-time pipelines."

  - title: "Kafka: a Distributed Messaging System for Log Processing"
    url: "https://notes.stephenholiday.com/Kafka.pdf"
    authors: "Kreps, Narkhede & Rao"
    year: 2011
    tags: [streaming, distributed-systems, data-engineering]
    notes: "The original Kafka paper from LinkedIn. Elegant design that aged remarkably well."

  - title: "Dynamo: Amazon's Highly Available Key-value Store"
    url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"
    authors: "DeCandia et al."
    year: 2007
    tags: [distributed-systems, databases]
    notes: "A masterclass in trading consistency for availability. The consistent hashing and vector clocks sections are worth re-reading."

  - title: "Riffle: Optimized Shuffle Service for Large-Scale Data Analytics"
    url: "https://oar.princeton.edu/bitstream/88435/pr1hz60/1/RiffleOptimShuffleServiceLargeScaleDataAnalytics.pdf"
    authors: "Haoyu Zhang et al."
    year: 2018
    tags: [distributed-systems, spark]
    notes: ""

  - title: "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing"
    url: "https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf"
    authors: "Zaharia et al."
    year: 2012
    tags: [spark, distributed-systems, data-engineering]
    notes: "The original Spark paper introducing RDDs. Elegant fault-tolerance model that made in-memory cluster computing practical."

  - title: "Large-Scale Cluster Management at Google with Borg"
    url: "https://research.google/pubs/pub43438/"
    authors: "Verma et al."
    year: 2015
    tags: [kubernetes, cluster-management, infrastructure]
    notes: "The paper that inspired Kubernetes. Details how Google schedules workloads across thousands of machines — essential for understanding container orchestration."

  - title: "Druid: A Real-time Analytical Data Store"
    url: "https://vldb.org/pvldb/vol7/p1525-yang.pdf"
    authors: "Yang et al."
    year: 2014
    tags: [druid, olap, data-engineering, streaming]
    notes: "How Druid achieves sub-second OLAP queries over real-time and historical data. The segment architecture and tiered storage model are still widely referenced."

  - title: "ClickHouse: Lightning Fast Analytics for Everyone"
    url: "https://www.vldb.org/pvldb/vol15/p3731-schulze.pdf"
    authors: "Schulze et al."
    year: 2022
    tags: [clickhouse, olap, databases]
    notes: "The VLDB paper covering ClickHouse's vectorized execution engine and compression schemes. Explains why it's so fast for analytical queries."

  - title: "Dremel: Interactive Analysis of Web-Scale Datasets"
    url: "https://research.google/pubs/pub36632/"
    authors: "Melnik et al."
    year: 2010
    tags: [bigquery, olap, distributed-systems]
    notes: "The paper behind BigQuery and the Parquet columnar format. The nested data model and multi-level serving tree are foundational to modern analytical engines."

  - title: "Apache Celeborn: A Unified Shuffle Service for Big Data Analytics"
    url: "https://www.vldb.org/pvldb/vol16/p3504-guo.pdf"
    authors: "Guo et al."
    year: 2023
    tags: [celeborn, spark, data-engineering, distributed-systems]
    notes: "Tackles Spark's shuffle bottleneck by decoupling shuffle from executors. Significant improvement in stability and performance at large scale."

  - title: "The Google File System"
    url: "https://research.google/pubs/pub51/"
    authors: "Ghemawat, Gobioff & Leung"
    year: 2003
    tags: [distributed-systems, cloud-storage, infrastructure]
    notes: "The original GFS paper. Direct ancestor of HDFS and modern cloud object stores. The design decisions around fault tolerance and append-only workloads still influence systems today."

  - title: "Apache Flink: Stream and Batch Processing in a Single Engine"
    url: "https://asterios.katsifodimos.com/assets/publications/flink-deb.pdf"
    authors: "Carbone et al."
    year: 2015
    tags: [flink, streaming, data-engineering]
    notes: "How Flink unifies batch and streaming with a single runtime. The treatment of time semantics and stateful computation is particularly well done."

  - title: "In Search of an Understandable Consensus Algorithm (Raft)"
    url: "https://raft.github.io/raft.pdf"
    authors: "Ongaro & Ousterhout"
    year: 2014
    tags: [raft, consensus, distributed-systems]
    notes: "Consensus made approachable. Designed explicitly to be easier to understand than Paxos — the leader election and log replication sections are clear and worth studying."

  - title: "Paxos Made Simple"
    url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
    authors: "Lamport"
    year: 2001
    tags: [paxos, consensus, distributed-systems]
    notes: "Lamport's accessible re-explanation of the Paxos protocol. Short and dense — best read alongside a Raft implementation to see the contrast."

  - title: "ZooKeeper: Wait-free Coordination for Internet-scale Systems"
    url: "https://www.usenix.org/legacy/event/atc10/tech/full_papers/Hunt.pdf"
    authors: "Hunt et al."
    year: 2010
    tags: [zookeeper, distributed-systems, coordination]
    notes: "The original ZooKeeper paper. The wait-free primitives and znode model are worth understanding even if you use etcd or Consul today."

  - title: "Bigtable: A Distributed Storage System for Structured Data"
    url: "https://research.google/pubs/pub27898/"
    authors: "Chang et al."
    year: 2006
    tags: [databases, distributed-systems, cloud-storage]
    notes: "Google's wide-column store — the blueprint for HBase and a major influence on Cassandra. Read alongside Dynamo to see two very different philosophies for distributed storage."

  - title: "Spanner: Google's Globally-Distributed Database"
    url: "https://research.google/pubs/pub39966/"
    authors: "Corbett et al."
    year: 2012
    tags: [databases, distributed-systems, consensus]
    notes: "Probably the most cited database paper of the last 15 years. TrueTime is the key insight — using atomic clocks and GPS to bound clock uncertainty and achieve external consistency at global scale."

  - title: "Cassandra: A Decentralized Structured Storage System"
    url: "https://www.cs.cornell.edu/projects/ladis2009/papers/lakshman-ladis2009.pdf"
    authors: "Lakshman & Malik"
    year: 2010
    tags: [databases, distributed-systems]
    notes: "Facebook's NoSQL system that blends Dynamo's partitioning with Bigtable's data model. Short paper but the design choices — tunable consistency, gossip-based membership — are worth studying."

  - title: "The Snowflake Elastic Data Warehouse"
    url: "https://dl.acm.org/doi/10.1145/2882903.2903741"
    authors: "Dageville et al."
    year: 2016
    tags: [snowflake, olap, cloud-storage, data-engineering]
    notes: "The architectural paper behind Snowflake. The separation of storage, compute, and cloud services into three independent layers is the key idea — it's what made elastic scaling practical for SQL warehouses."

  - title: "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores"
    url: "https://www.vldb.org/pvldb/vol13/p3411-armbrust.pdf"
    authors: "Armbrust et al."
    year: 2020
    tags: [delta-lake, data-engineering, cloud-storage, spark]
    notes: "How Delta Lake brings ACID transactions to Parquet on object storage via a transaction log. If you work on data lakes this is required reading — it directly shaped Iceberg and Hudi too."

  - title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics"
    url: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
    authors: "Armbrust et al."
    year: 2021
    tags: [delta-lake, olap, data-engineering, cloud-storage]
    notes: "The architectural argument for the lakehouse pattern — one open storage layer for both BI and ML workloads. Short and direct, good for framing conversations about modern data stack."

  - title: "MillWheel: Fault-Tolerant Stream Processing at Internet Scale"
    url: "https://research.google/pubs/pub41378/"
    authors: "Akidau et al."
    year: 2013
    tags: [streaming, distributed-systems, data-engineering]
    notes: "Google's internal stream processor that directly preceded the Dataflow paper. Read this first to understand where the watermark and exactly-once delivery ideas actually came from."

  - title: "Presto: SQL on Everything"
    url: "https://research.facebook.com/publications/presto-sql-on-everything/"
    authors: "Sethi et al."
    year: 2019
    tags: [presto, olap, distributed-systems, data-engineering]
    notes: "How Facebook built a federated SQL engine that queries Hive, Cassandra, MySQL, and more under a single interface. The connector model and adaptive query execution sections are particularly practical."

  - title: "Velox: Meta's Unified Execution Engine"
    url: "https://research.facebook.com/publications/velox-metas-unified-execution-engine/"
    authors: "Pedreira et al."
    year: 2022
    tags: [velox, olap, data-engineering, infrastructure]
    notes: "Meta's vectorized execution engine shared across Presto, Spark, and other systems. The case for a single, reusable expression evaluation and IO layer — increasingly influential in the industry."

  - title: "Dapper, a Large-Scale Distributed Systems Tracing Infrastructure"
    url: "https://research.google/pubs/pub36356/"
    authors: "Sigelman et al."
    year: 2010
    tags: [observability, distributed-systems, infrastructure]
    notes: "The paper that defined distributed tracing. Direct inspiration for Jaeger, Zipkin, and OpenTelemetry. Essential if you care about understanding latency and failures in distributed systems."

  - title: "The Chubby Lock Service for Loosely-Coupled Distributed Systems"
    url: "https://research.google/pubs/pub27897/"
    authors: "Burrows"
    year: 2006
    tags: [coordination, distributed-systems, consensus]
    notes: "Google's lock service and the direct inspiration for ZooKeeper. Understanding Chubby clarifies the design choices ZooKeeper made differently — and why."
---
