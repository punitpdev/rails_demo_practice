class SubCategory < ApplicationRecord
  belongs_to :category

  attribute :map do
    OpenStruct.new(type: "String")
  end
end
