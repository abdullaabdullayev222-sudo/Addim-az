# Avtomatik testlər

Hər yeni funksiyadan sonra işə salınır:

    node --no-warnings tests/server.mjs .   # lokal server (Cloudflare Functions + SQLite)
    python3 tests/smoke.py                   # bütün əsas ssenarilər

Server `http://localhost:8790` ünvanında işləyir; D1 bazası yaddaşda SQLite ilə təqlid olunur,
admin açarı testdə `test-admin-key-123`-dür.
