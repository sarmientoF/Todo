const config = {
	"gatsby": {
		"pathPrefix": "/graphql/react",
		"siteUrl": "https://learn.hasura.io",
		"gaTrackingId": "UA-59768903-1"
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/logo.png",
		"logoLink": "https://learn.hasura.io",
		"title": "<a href='https://learn.hasura.io'>/ graphql </a><a href='https://learn.hasura.io/graphql/react'>/ react</a>",
		"githubUrl": "https://github.com/hasura/learn-graphql",
		"helpUrl": "https://discordapp.com/invite/vBPpJkS",
		"tweetText": "Check out this GraphQL course for React developers by @HasuraHQ https://learn.hasura.io/graphql/react",
		"links": [{
			"text": "hasura.io",
			"link": "https://hasura.io"
		}],
		"search": {
			"enabled": true,
			"indexName": "learn-react-apollo-hooks",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/intro-to-graphql",
    		"/setup",
    		"/apollo-client",
    		"/queries",
    		"/mutations-variables",
    		"/optimistic-update-mutations",
    		"/subscriptions",
    		"/realtime-feed",
    		"/what-next"
    	],
		"links": [
			{
			"text": "Hasura Docs",
			"link": "https://docs.hasura.io"
			},
			{
			"text": "GraphQL Docs",
			"link": "https://graphql.org/learn"
			}
		],
		"frontline": false,
		"ignoreIndex": true
	},
	"siteMetadata": {
		"title": "2 hour GraphQL Apollo course for React developers | Hasura",
		"description": "A concise and powerful tutorial that covers fundamental concepts of both GraphQL and using GraphQL in React with Apollo Hooks",
		"ogImage": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-card-react-apollo-hooks.png",
		"docsLocation": "https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/react-apollo-hooks/tutorial-site/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/react-favicon.png"
	},
};

module.exports = config;
