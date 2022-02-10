Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do 
        origin 'localhost:3000',
        resource '*',headers: :any, methods: %i[get post patch put delete]
    end
end