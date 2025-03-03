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
    cycle: string;
}

export const transactionHistory: TransactionHistory[] = [
    {
        TransactionId: "TRANS-1740751112799-464349",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 1",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112800-467821",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112801-469234",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112802-471567",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 2",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112803-473890",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112804-476123",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112805-478456",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112806-480789",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 3",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112807-483012",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 1",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112808-485345",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 2",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112809-487678",
        TransactionType: "Daily Claim Quest",
        Time: "2025-02-04",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 3",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112810-489901",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112811-492234",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112812-494567",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-04",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112813-496890",
        TransactionType: "Speedtest Earning",
        Time: "2025-02-05",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    }
];
