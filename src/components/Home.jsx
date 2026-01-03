import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
            <h1>英検対策アプリ Portal</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                <Link to="/classroom" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textDecoration: 'none', color: 'black', background: '#f9f9f9' }}>
                    <h2>👨‍🏫 授業用 (Classroom)</h2>
                    <p>紙面再現・講師解説モード</p>
                </Link>
                <Link to="/vocab" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textDecoration: 'none', color: 'black', background: '#e0f7fa' }}>
                    <h2>🐣 宿題用 (Vocabulary)</h2>
                    <p>SysTan風・単語暗記</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
