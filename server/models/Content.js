const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  contentId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: true,
    enum: ['Home', 'About', 'Board', 'Events', 'Schedule', 'Contact', 'Gallery', 'Members']
  },
  section: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'en'
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  version: {
    type: Number,
    default: 1
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for efficient queries
contentSchema.index({ page: 1, section: 1 });
contentSchema.index({ contentId: 1, language: 1 });

// Pre-save middleware to increment version
contentSchema.pre('save', function(next) {
  if (this.isModified('content')) {
    this.version += 1;
    this.lastModifiedAt = new Date();
  }
  next();
});

// Static method to get content by ID
contentSchema.statics.getContent = function(contentId, language = 'en') {
  return this.findOne({ contentId, language, isPublished: true });
};

// Static method to get all content for a page
contentSchema.statics.getPageContent = function(page, language = 'en') {
  return this.find({ page, language, isPublished: true }).sort({ section: 1 });
};

// Instance method to create a new version
contentSchema.methods.createVersion = function() {
  const newContent = new this.constructor({
    ...this.toObject(),
    _id: undefined,
    version: this.version + 1,
    createdAt: new Date()
  });
  return newContent.save();
};

module.exports = mongoose.model('Content', contentSchema);
