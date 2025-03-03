interface NetworkData {
    Time: string;
    DownloadSpeed: number;
    UploadSpeed: number;
    IPAddress: string;
    Bytes: number;
}

export const tableData: NetworkData[] = [
    {
        Time: "2025-02-04 11:26",
        DownloadSpeed: 125.45,
        UploadSpeed: 45.32,
        IPAddress: "192.168.1.105",
        Bytes: 100
    },
    {
        Time: "2025-02-04 12:45",
        DownloadSpeed: 95.78,
        UploadSpeed: 38.91,
        IPAddress: "192.168.1.107",
        Bytes: 50
    },
    {
        Time: "2025-02-04 13:15",
        DownloadSpeed: 150.23,
        UploadSpeed: 52.67,
        IPAddress: "192.168.1.113",
        Bytes: 100
    },
    {
        Time: "2025-02-04 14:30",
        DownloadSpeed: 88.92,
        UploadSpeed: 41.45,
        IPAddress: "192.168.1.118",
        Bytes: 100
    },
    {
        Time: "2025-02-04 15:45",
        DownloadSpeed: 142.67,
        UploadSpeed: 48.89,
        IPAddress: "192.168.1.122",
        Bytes: 100
    },
    {
        Time: "2025-02-04 16:30",
        DownloadSpeed: 133.89,
        UploadSpeed: 46.75,
        IPAddress: "192.168.1.125",
        Bytes: 100
    },
    {
        Time: "2025-02-04 17:15",
        DownloadSpeed: 115.34,
        UploadSpeed: 43.21,
        IPAddress: "192.168.1.128",
        Bytes: 100
    },
    {
        Time: "2025-02-04 18:00",
        DownloadSpeed: 128.56,
        UploadSpeed: 49.90,
        IPAddress: "192.168.1.130",
        Bytes: 100
    },
    {
        Time: "2025-02-04 19:20",
        DownloadSpeed: 138.90,
        UploadSpeed: 51.23,
        IPAddress: "192.168.1.133",
        Bytes: 100
    },
    {
        Time: "2025-02-04 20:10",
        DownloadSpeed: 145.67,
        UploadSpeed: 47.88,
        IPAddress: "192.168.1.135",
        Bytes: 100
    },
    {
        Time: "2025-02-04 21:00",
        DownloadSpeed: 120.45,
        UploadSpeed: 44.67,
        IPAddress: "192.168.1.138",
        Bytes: 100
    }
];



interface TransactionHistory {
    TransactionId: string;
    TransactionType: string;
    Time: string;
    BytesEarned: number;
    Details: string;
}
export const transactionHistory: TransactionHistory[] = [
    {
        TransactionId: "TRX001",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 11:26",
        BytesEarned: 100,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX002",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 12:45",
        BytesEarned: 200,
        Details: "Referral bonus"
    },
    {
        TransactionId: "TRX003",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 13:15",
        BytesEarned: 200,
        Details: "Data usage"
    },
    {
        TransactionId: "TRX004",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 14:30",
        BytesEarned: 100,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX005",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 15:45",
        BytesEarned: 200,
        Details: "Data usage"
    },
    {
        TransactionId: "TRX006",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 16:30",
        BytesEarned: 200,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX007",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 17:15",
        BytesEarned: 200,
        Details: "Referral bonus"
    },
    {
        TransactionId: "TRX008",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 18:00",
        BytesEarned: 100,
        Details: "Data usage"
    },
    {
        TransactionId: "TRX009",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 19:20",
        BytesEarned: 100,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX010",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 20:10",
        BytesEarned: 100,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX011",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04 21:00",
        BytesEarned: 100,
        Details: "Data usage"
    },
    {
        TransactionId: "TRX012",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 21:45",
        BytesEarned: 200,
        Details: "Network sharing reward"
    },
    {
        TransactionId: "TRX013",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 22:30",
        BytesEarned: 200,
        Details: "Referral bonus"
    },
    {
        TransactionId: "TRX014",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04 23:15",
        BytesEarned: 200,
        Details: "Data usage"
    },
    {
        TransactionId: "TRX015",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-05 00:00",
        BytesEarned: 200,
        Details: "Network sharing reward"
    }
];
