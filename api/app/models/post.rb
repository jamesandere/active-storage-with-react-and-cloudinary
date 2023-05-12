class Post < ApplicationRecord
    has_one_attached :image
    validate :valid_image

    def valid_image
        return unless image.attached?

        unless image.blob.byte_size <= 1.megabyte
            errors.add(:image, "The image is bigger than 1MB")
        end
    end

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
end
