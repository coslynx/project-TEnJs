const sqlite3 = require('sqlite3');

// Connect to SQLite database
const db = new sqlite3.Database('discord_bot.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

// Create table for storing bot data
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS bot_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prefix TEXT NOT NULL,
        volume INTEGER NOT NULL,
        playback_quality TEXT NOT NULL,
        permissions TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created successfully');
        }
    });
});

// Insert default values for bot data
db.serialize(() => {
    const insertData = db.prepare(`INSERT INTO bot_data (prefix, volume, playback_quality, permissions)
    VALUES (?, ?, ?, ?)`);
    
    insertData.run('!', 50, 'medium', 'default');
    
    insertData.finalize();
});

// Retrieve bot data
function getBotData(callback) {
    db.get('SELECT * FROM bot_data', (err, row) => {
        if (err) {
            console.error('Error getting bot data:', err.message);
            callback(err, null);
        } else {
            callback(null, row);
        }
    });
}

// Update bot data
function updateBotData(newData, callback) {
    db.run(`UPDATE bot_data
    SET prefix = ?,
        volume = ?,
        playback_quality = ?,
        permissions = ?
    WHERE id = 1`, [newData.prefix, newData.volume, newData.playback_quality, newData.permissions], (err) => {
        if (err) {
            console.error('Error updating bot data:', err.message);
            callback(err);
        } else {
            console.log('Bot data updated successfully');
            callback(null);
        }
    });
}

// Close the database connection
function closeDatabase() {
    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err.message);
        } else {
            console.log('Database connection closed');
        }
    });
}

module.exports = { getBotData, updateBotData, closeDatabase };