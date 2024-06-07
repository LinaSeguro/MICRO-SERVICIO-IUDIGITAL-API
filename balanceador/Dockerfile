FROM nginx:alpine

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port and run the application
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
