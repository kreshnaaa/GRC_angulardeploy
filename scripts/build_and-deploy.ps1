jobs:
  deploy:
    runs-on: self-hosted

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18.14'

    - name: Install dependencies
      run: npm install # Or yarn install if you're using yarn

    - name: Build website
      run: npm run build # Or whatever command is required to build your website

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.ACCESS_TOKEN }}
        publish_dir: ./build # Update this to the directory containing your built website
        publish_branch: gh-pages

