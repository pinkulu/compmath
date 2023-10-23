import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
// the style
import styles from 'styles/settings.module.css'
import { useRouter } from 'next/router';
// font
const inter = Inter({ subsets: ['latin'] })

export default function settings(){
        return (
            <div className="settings">
                <h2>Settings</h2>
                <form>
                    <div className="form-group">
                        <label>Nickname:</label>
                        <input type="text" name="nickname" placeholder="Your new nickname" />
                    </div>
                    <div className="form-group">
                        <label>Bio:</label>
                        <textarea name="bio" placeholder="Your new bio"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Password Change:</label>
                        <input type="password" name="password" placeholder="New Password" />
                    </div>
                    <div className="form-group">
                        <label>E-mail Change:</label>
                        <input type="email" name="email" placeholder="New E-mail" />
                    </div>
                    <div className="form-group">
                        <label>Preferred Side:</label>
                        <select name="side">
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Upload Profile Picture:</label>
                        <input type="file" name="profilePicture" accept="image/*" />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        );
    };
