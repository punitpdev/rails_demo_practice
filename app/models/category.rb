class Category < ApplicationRecord
  has_many :sub_categories
  accepts_nested_attributes_for :sub_categories
end
