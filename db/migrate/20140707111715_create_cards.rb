class CreateCards < ActiveRecord::Migration
  def change
    create_table :business_cards do |t|
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.string :phone_number
    end
  end
end
