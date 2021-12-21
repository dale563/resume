// const webpack = require('webpack'); // Webpack vient avec plusieur plugins d'emblé
const path = require('path'); //path fait parti de node.js
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    entry: {
        main: path.resolve(__dirname, 'src/assets/js/main.js'),
      },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js', // plus tard on va le séparer en production et developpement et ajouter [name]-[contenthash].bundle.js
        assetModuleFilename: '[name][ext]', // Pour les fichiers images et autres
        // publicPath: '/dist', //-vérifier l'utilité...
        clean: true,
    },

    devtool: 'inline-source-map', //permet d'identifier l'orgine des erreurs

    devServer: {
        // static: path.resolve(__dirname, 'dist'),
        // port: 5001,
        // open: true, - djà mis dans les options au lancement du script: ouvre le navigateur par défaut
        hot: true, //Afficher les changements live au modification des fichiers
    },

    module: {  //Ce sont les loaders
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'], //permet de transformer le javascript en ES5
                    },
                  },
            },
            //css
            // { 
            //     test: /\.css$/, 
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            // },
            // { 
            //     test: /\.css$/, 
            //     use: ['style-loader', 'css-loader'] //Utiliser style-loader écrit le css dans la page html directement;
            // },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'], //Se lit de droite à gauche - sass-loader transforme le sass en css;
            },
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' }, //Webpack5 fournit par défaut
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({   // Peut être un fichier.js
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            bodyTags:`<script src="./assets/scripts/mustache.min.js"></script><script src="./assets/scripts/github-activity.min.js"></script>`
        }),
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: '[name].css'
         }),
         new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/assets/images') },
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist/favicon.ico') },
                { from: path.resolve(__dirname, './node_modules/github-activity-feed/dist/github-activity.min.js'), to: path.resolve(__dirname, 'dist/assets/scripts/github-activity.min.js') },
                { from: path.resolve(__dirname, './node_modules/mustache/mustache.min.js'), to: path.resolve(__dirname, 'dist/assets/scripts/mustache.min.js') },
            ],
          }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }),
    ],
    
};