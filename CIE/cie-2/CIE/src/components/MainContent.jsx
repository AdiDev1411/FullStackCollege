import { useState } from 'react';
import './MainContent.css';

const MainContent = ({ currentSection, isSidebarOpen }) => {
  const [contentData] = useState({
    dashboard: {
      title: 'Dashboard',
      content: (
        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <h3>1,234</h3>
                <p>Total Users</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-info">
                <h3>567</h3>
                <p>Products</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-info">
                <h3>$89,234</h3>
                <p>Revenue</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <h3>+12%</h3>
                <p>Growth</p>
              </div>
            </div>
          </div>
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              <li>New user registered - John Smith</li>
              <li>Product "Wireless Headphones" added</li>
              <li>Order #1234 completed</li>
              <li>Security settings updated</li>
            </ul>
          </div>
        </div>
      )
    },
    'products-all-products': {
      title: 'All Products',
      content: (
        <div className="products-content">
          <div className="products-header">
            <h3>Product Inventory</h3>
            <button className="add-btn">+ Add Product</button>
          </div>
          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wireless Headphones</td>
                  <td>Electronics</td>
                  <td>$99.99</td>
                  <td>45</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Running Shoes</td>
                  <td>Sports</td>
                  <td>$129.99</td>
                  <td>23</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Coffee Mug</td>
                  <td>Home</td>
                  <td>$19.99</td>
                  <td>67</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    'products-add-product': {
      title: 'Add Product',
      content: (
        <div className="add-product-content">
          <form className="product-form">
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="Enter product name" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>Select category</option>
                <option>Electronics</option>
                <option>Sports</option>
                <option>Home</option>
                <option>Fashion</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label>Stock Quantity</label>
                <input type="number" placeholder="0" />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Product description" rows="4"></textarea>
            </div>
            <div className="form-actions">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="save-btn">Save Product</button>
            </div>
          </form>
        </div>
      )
    },
    analytics: {
      title: 'Analytics',
      content: (
        <div className="analytics-content">
          <div className="analytics-cards">
            <div className="analytics-card">
              <h4>Sales Trend</h4>
              <div className="chart-placeholder">📊 Chart visualization would go here</div>
            </div>
            <div className="analytics-card">
              <h4>User Growth</h4>
              <div className="chart-placeholder">📈 User growth chart</div>
            </div>
          </div>
          <div className="analytics-metrics">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Conversion Rate</span>
                <span className="metric-value">3.2%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Avg. Order Value</span>
                <span className="metric-value">$75.40</span>
              </div>
              <div className="metric">
                <span className="metric-label">Customer Lifetime Value</span>
                <span className="metric-value">$450.20</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'settings-general': {
      title: 'General Settings',
      content: (
        <div className="settings-content">
          <form className="settings-form">
            <div className="settings-section">
              <h3>Application Settings</h3>
              <div className="form-group">
                <label>Application Name</label>
                <input type="text" defaultValue="AdminPanel" />
              </div>
              <div className="form-group">
                <label>Theme</label>
                <select>
                  <option>Dark</option>
                  <option>Light</option>
                  <option>Auto</option>
                </select>
              </div>
              <div className="form-group">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
            <div className="settings-section">
              <h3>Notifications</h3>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  Email notifications
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  Push notifications
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  SMS notifications
                </label>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      )
    }
  });

  const getCurrentContent = () => {
    const content = contentData[currentSection];
    if (content) {
      return content;
    }
    
    // Default content for unmatched sections
    return {
      title: 'Page Not Found',
      content: (
        <div className="default-content">
          <h3>This section is under construction</h3>
          <p>The "{currentSection}" page is being developed.</p>
        </div>
      )
    };
  };

  const { title, content } = getCurrentContent();

  return (
    <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="content-header">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="content-body">
        {content}
      </div>
    </div>
  );
};

export default MainContent;
