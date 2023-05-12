class MessageSerializer
  include JSONAPI::Serializer
  attributes :id, :content, :images, :created_at, :updated_at, :image_url
end
